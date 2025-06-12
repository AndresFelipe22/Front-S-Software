// DealSlice: Redux slice para administrar las ofertas (deals) en el panel de administración
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Deal, DealsState } from "../../types/DealTypes";
import { api } from "../../config/api";

const initialState: DealsState = {
  deals: [],
  loading: false,
  error: null,
  dealCreated: false,
  dealUpdated: false,
};

export const createDeal = createAsyncThunk(
  "adminDeals/createDeal",
  async (deal: any, { rejectWithValue }) => {
    try {
      const response = await api.post("/admin/deals", deal);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Error al crear oferta");
    }
  }
);

export const getAllDeals = createAsyncThunk(
  "adminDeals/getAllDeals",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get("/admin/deals");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Error al obtener ofertas");
    }
  }
);

export const deleteDeal = createAsyncThunk(
  "adminDeals/deleteDeal",
  async (id: number, { rejectWithValue }) => {
    try {
      await api.delete(`/admin/deals/${id}`);
      return id;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Error al eliminar oferta");
    }
  }
);

export const updateDeal = createAsyncThunk(
  "adminDeals/updateDeal",
  async (deal: { id: number; discount: number; category: { categoryId: string; image: string; name: string } }, { rejectWithValue }) => {
    try {
      const response = await api.put(`/admin/deals/${deal.id}`, deal);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Error al actualizar oferta");
    }
  }
);

const dealSlice = createSlice({
  name: "adminDeals",
  initialState,
  reducers: {
    resetDealState: (state) => {
      state.dealCreated = false;
      state.dealUpdated = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createDeal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createDeal.fulfilled, (state, action: PayloadAction<Deal>) => {
        state.deals.push(action.payload);
        state.loading = false;
        state.dealCreated = true;
      })
      .addCase(createDeal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getAllDeals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllDeals.fulfilled, (state, action: PayloadAction<Deal[]>) => {
        state.deals = action.payload;
        state.loading = false;
      })
      .addCase(getAllDeals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteDeal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteDeal.fulfilled, (state, action) => {
        state.deals = state.deals.filter(deal => deal.id !== action.payload);
        state.loading = false;
      })
      .addCase(deleteDeal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateDeal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateDeal.fulfilled, (state, action: PayloadAction<Deal>) => {
        const index = state.deals.findIndex(deal => deal.id === action.payload.id);
        if (index !== -1) {
          state.deals[index] = action.payload;
        }
        state.loading = false;
        state.dealUpdated = true;
      })
      .addCase(updateDeal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetDealState } = dealSlice.actions;
export default dealSlice.reducer;
