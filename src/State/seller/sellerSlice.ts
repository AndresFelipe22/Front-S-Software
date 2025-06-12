import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {api} from "../../config/api";
import { Seller } from "../../types/sellerTypes";

// Thunk para obtener el perfil del vendedor autenticado.
// Parámetro: jwt (string) - token de autenticación JWT.
// Realiza una petición GET a la API y retorna los datos del perfil.
export const fetchSellerProfile = createAsyncThunk(
  "/sellers/fetchSellerProfile",
  async (jwt: string, { rejectWithValue }) => {
    try {
      const response = await api.get("/sellers/profile", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Error fetching seller profile");
    }
  }
);

export const fetchSellers = createAsyncThunk(
  "/sellers/fetchSellers",
  async (accountStatus: string, { rejectWithValue }) => {
    try {
      const response = await api.get(`/sellers?accountStatus=${accountStatus}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Error fetching sellers");
    }
  }
);

interface UpdateSellerStatusPayload {
  id: number;
  status: string;
}

export const updateSellerAccountStatus = createAsyncThunk(
  "/sellers/updateStatus",
  async ({ id, status }: UpdateSellerStatusPayload, { rejectWithValue }) => {
    try {
      const response = await api.patch(`/sellers/${id}/status`, { status });
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Error updating seller status");
    }
  }
);

interface SellerState {
  sellers: Seller[];
  selectedSeller: Seller | null;
  profile: Seller | null;
  report: any;
  loading: boolean;
  error: string | null;
}

const initialState: SellerState = {
  sellers: [],
  selectedSeller: null,
  profile: null,
  report: null,
  loading: false,
  error: null,
}

const sellerSlice = createSlice({
  name: "sellers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Seller Profile
      .addCase(fetchSellerProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSellerProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.profile = action.payload;
      })
      .addCase(fetchSellerProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Fetch Sellers
      .addCase(fetchSellers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSellers.fulfilled, (state, action) => {
        state.loading = false;
        state.sellers = action.payload;
      })
      .addCase(fetchSellers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Update Seller Status
      .addCase(updateSellerAccountStatus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateSellerAccountStatus.fulfilled, (state, action) => {
        state.loading = false;
        const updatedSeller = action.payload;
        state.sellers = state.sellers.map(seller => 
          seller.id === updatedSeller.id ? updatedSeller : seller
        );
      })
      .addCase(updateSellerAccountStatus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});

export default sellerSlice.reducer;