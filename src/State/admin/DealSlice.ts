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
      });
  },
});

export const { resetDealState } = dealSlice.actions;
export default dealSlice.reducer;
