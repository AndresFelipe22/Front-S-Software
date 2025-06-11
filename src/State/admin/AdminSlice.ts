// AdminSlice: Redux slice para administrar categorías de la home en el panel de administración
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { HomeCategory } from '../../types/HomeTypes';
import { api } from '../../config/api';

const API_URL = '/admin';

export const updateHomeCategory = createAsyncThunk<HomeCategory, { id: number; data: HomeCategory }>(
  'adminHome/updateHomeCategory',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const response = await api.patch(`${API_URL}/home-category/${id}`, data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Error al actualizar categoría.');
    }
  }
);

export const fetchHomeCategories = createAsyncThunk<HomeCategory[]>(
  'adminHome/fetchHomeCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}/home-category`);
      return response.data;
    } catch (error:any) {
      return rejectWithValue(error.response?.data?.message || 'Error al obtener categorías.');
    }
  }
);

interface HomeCategoryState {
  categories: HomeCategory[];
  loading: boolean;
  error: string | null;
  categoryUpdated: boolean;
}

const initialState: HomeCategoryState = {
  categories: [],
  loading: false,
  error: null,
  categoryUpdated: false,
};

const adminSlice = createSlice({
  name: 'adminHome',
  initialState,
  reducers: {
    resetCategoryState: (state) => {
      state.categoryUpdated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateHomeCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateHomeCategory.fulfilled, (state, action: PayloadAction<HomeCategory>) => {
        state.loading = false;
        state.categoryUpdated = true;
        // Actualiza la categoría en el array
        const idx = state.categories.findIndex(cat => cat.id === action.payload.id);
        if (idx !== -1) state.categories[idx] = action.payload;
      })
      .addCase(updateHomeCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchHomeCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchHomeCategories.fulfilled, (state, action: PayloadAction<HomeCategory[]>) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(fetchHomeCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetCategoryState } = adminSlice.actions;
export default adminSlice.reducer;
