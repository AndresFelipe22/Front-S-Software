// ReviewSlice: Redux slice para manejar reviews de productos en el ecommerce
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  ApiResponse,
  CreateReviewRequest,
  Review,
  ReviewState,
} from "../../types/ReviewTypes";
import { RootState } from "../Store";
import { api } from "../../config/api";

const API_URL = "/api";

// Thunk para obtener reviews por producto
export const fetchReviewsByProductId = createAsyncThunk<
  Review[],
  { productId: number },
  { rejectValue: string }
>(
  "review/fetchReviewsByProductId",
  async ({ productId }, { rejectWithValue }) => {
    try {
      const response = await api.get(
        `${API_URL}/products/${productId}/reviews`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to fetch reviews");
    }
  }
);

// Thunk para crear un review
export const createReview = createAsyncThunk<
  Review,
  { productId: number; review: CreateReviewRequest; jwt: string; navigate: any },
  { rejectValue: string }
>(
  "review/createReview",
  async ({ productId, review, jwt, navigate }, { rejectWithValue }) => {
    try {
      const response = await api.post(
        `${API_URL}/products/${productId}/reviews`,
        review,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      navigate(`/reviews/${productId}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to create review");
    }
  }
);

// Thunk para actualizar un review
export const updateReview = createAsyncThunk<
  Review,
  { reviewId: number; review: CreateReviewRequest; jwt: string },
  { rejectValue: string }
>(
  "review/updateReview",
  async ({ reviewId, review, jwt }, { rejectWithValue }) => {
    try {
      const response = await api.patch(
        `${API_URL}/reviews/${reviewId}`,
        review,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to update review");
    }
  }
);

// Thunk para eliminar un review
export const deleteReview = createAsyncThunk<
  ApiResponse,
  { reviewId: number; jwt: string },
  { rejectValue: string }
>(
  "review/deleteReview",
  async ({ reviewId, jwt }, { rejectWithValue }) => {
    try {
      const response = await api.delete(`${API_URL}/reviews/${reviewId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || "Failed to delete review");
    }
  }
);

// Estado inicial del slice
const initialState: ReviewState = {
  reviews: [],
  loading: false,
  error: null,
  reviewCreated: false,
  reviewUpdated: false,
  reviewDeleted: false,
};

// Slice principal
const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    resetReviewState: (state) => {
      state.reviews = [];
      state.loading = false;
      state.error = null;
      state.reviewCreated = false;
      state.reviewUpdated = false;
      state.reviewDeleted = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchReviewsByProductId
      .addCase(fetchReviewsByProductId.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReviewsByProductId.fulfilled, (state, action: PayloadAction<Review[]>) => {
        state.reviews = action.payload;
        state.loading = false;
      })
      .addCase(fetchReviewsByProductId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch reviews";
      })
      // createReview
      .addCase(createReview.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.reviewCreated = false;
      })
      .addCase(createReview.fulfilled, (state, action: PayloadAction<Review>) => {
        state.reviews.push(action.payload);
        state.loading = false;
        state.reviewCreated = true;
      })
      .addCase(createReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to create review";
        state.reviewCreated = false;
      })
      // updateReview
      .addCase(updateReview.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.reviewUpdated = false;
      })
      .addCase(updateReview.fulfilled, (state, action: PayloadAction<Review>) => {
        const index = state.reviews.findIndex((r) => r.id === action.payload.id);
        if (index !== -1) {
          state.reviews[index] = action.payload;
        }
        state.loading = false;
        state.reviewUpdated = true;
      })
      .addCase(updateReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to update review";
        state.reviewUpdated = false;
      })
      // deleteReview
      .addCase(deleteReview.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.reviewDeleted = false;
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.reviews = state.reviews.filter((r) => r.id !== action.meta.arg.reviewId);
        state.loading = false;
        state.reviewDeleted = true;
      })
      .addCase(deleteReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to delete review";
        state.reviewDeleted = false;
      });
  },
});

// Selectores para acceder al estado desde los componentes
export const selectReviews = (state: RootState) => state.review.reviews;
export const selectReviewLoading = (state: RootState) => state.review.loading;
export const selectReviewError = (state: RootState) => state.review.error;
export const selectReviewCreated = (state: RootState) => state.review.reviewCreated;
export const selectReviewUpdated = (state: RootState) => state.review.reviewUpdated;
export const selectReviewDeleted = (state: RootState) => state.review.reviewDeleted;

export default reviewSlice.reducer;
export const { resetReviewState } = reviewSlice.actions;
