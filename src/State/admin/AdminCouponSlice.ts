// AdminCouponSlice: Redux slice para administrar cupones en el panel de administración
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Coupon, CouponState } from "../../types/couponTypes";
import { api } from "../../config/api";

const API_URL = "/api/coupons";

export const createCoupon = createAsyncThunk<
  Coupon,
  { coupon: any },
  { rejectValue: string }
>("adminCoupon/createCoupon", async ({ coupon }, { rejectWithValue }) => {
  try {
    const response = await api.post(`${API_URL}/admin/create`, coupon);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Error al crear cupón");
  }
});

export const deleteCoupon = createAsyncThunk<
  string,
  { id: number },
  { rejectValue: string }
>("adminCoupon/deleteCoupon", async ({ id }, { rejectWithValue }) => {
  try {
    const response = await api.delete(`${API_URL}/admin/delete/${id}`);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Error al eliminar cupón");
  }
});

export const fetchAllCoupons = createAsyncThunk<
  Coupon[],
  void,
  { rejectValue: string }
>("adminCoupon/fetchAllCoupons", async (_, { rejectWithValue }) => {
  try {
    const response = await api.get(`${API_URL}/admin/all`);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || "Error al obtener cupones");
  }
});

const initialState: CouponState = {
  coupons: [],
  cart: null,
  loading: false,
  error: null,
  couponCreated: false,
  couponApplied: false,
};

const adminCouponSlice = createSlice({
  name: "adminCoupon",
  initialState,
  reducers: {
    resetCouponState: (state) => {
      state.couponCreated = false;
      state.couponApplied = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createCoupon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createCoupon.fulfilled, (state, action: PayloadAction<Coupon>) => {
        state.coupons.push(action.payload);
        state.loading = false;
        state.couponCreated = true;
      })
      .addCase(createCoupon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(deleteCoupon.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCoupon.fulfilled, (state, action: PayloadAction<string>) => {
        state.coupons = state.coupons.filter(coupon => coupon.id !== Number(action.payload));
        state.loading = false;
      })
      .addCase(deleteCoupon.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(fetchAllCoupons.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllCoupons.fulfilled, (state, action: PayloadAction<Coupon[]>) => {
        state.coupons = action.payload;
        state.loading = false;
      })
      .addCase(fetchAllCoupons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetCouponState } = adminCouponSlice.actions;
export default adminCouponSlice.reducer;
