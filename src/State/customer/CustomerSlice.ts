// CustomerSlice (HomeSlice): Redux slice para manejar los datos de la página principal (home)
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { HomeData, HomeCategory } from "../../types/HomeTypes";
import { api } from "../../config/api";
import { RootState } from "../Store";

// Estado inicial del slice
interface CustomerState {
  homePageData: HomeData | null; // Cambiado de homeData a homePageData para unificación
  categories: HomeCategory[];
  loading: boolean;
  error: string | null;
}

const initialState: CustomerState = {
  homePageData: null, // Cambiado de homeData a homePageData
  categories: [],
  loading: false,
  error: null,
};

// Thunk para obtener los datos de la página principal
export const fetchHomePageData = createAsyncThunk<
  HomeData,
  void,
  { rejectValue: string }
>(
  "customer/fetchHomePageData",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/home");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Error al obtener datos de home");
    }
  }
);

// Thunk para crear una nueva categoría en home
export const createHomeCategories = createAsyncThunk<
  HomeCategory,
  Partial<HomeCategory>,
  { rejectValue: string }
>(
  "customer/createHomeCategories",
  async (category, { rejectWithValue }) => {
    try {
      const response = await api.post("/api/home/categories", category);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Error al crear categoría");
    }
  }
);

// Slice principal
const customerSlice = createSlice({
  name: "customerHome",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchHomePageData
      .addCase(fetchHomePageData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomePageData.fulfilled, (state, action: PayloadAction<HomeData>) => {
        state.homePageData = action.payload; // Cambiado de homeData a homePageData
        state.loading = false;
      })
      .addCase(fetchHomePageData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error al obtener datos de home";
      })
      // createHomeCategories
      .addCase(createHomeCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createHomeCategories.fulfilled, (state, action: PayloadAction<HomeCategory>) => {
        state.categories.push(action.payload);
        state.loading = false;
      })
      .addCase(createHomeCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Error al crear categoría";
      });
  },
});

// Selectores actualizados
export const selectHomeData = (state: RootState) => state.homePage.homePageData;
export const selectHomeCategories = (state: RootState) => state.homePage.categories;
export const selectHomeLoading = (state: RootState) => state.homePage.loading;
export const selectHomeError = (state: RootState) => state.homePage.error;

export default customerSlice.reducer;
