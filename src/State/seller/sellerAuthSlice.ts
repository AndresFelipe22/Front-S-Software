// sellerAuthSlice: Redux slice para autenticación y registro de vendedores en el ecommerce
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../config/api';
import { Seller } from '../../types/sellerTypes';
import axios from 'axios';
import { RootState } from '../Store';

// Estado inicial del slice de autenticación de vendedor
interface SellerAuthState {
  otpSent: boolean;
  error: string | null;
  loading: boolean;
  jwt: string | null;
  sellerCreated: string | null;
}

const initialState: SellerAuthState = {
  otpSent: false,
  error: null,
  loading: false,
  jwt: null,
  sellerCreated: null,
};

const API_URL = '/sellers';

// Thunk para enviar OTP de login
export const sendLoginOtp = createAsyncThunk<
  { email: string },
  string,
  { rejectValue: string }
>('otp/sendLoginOtp', async (email, { rejectWithValue }) => {
  try {
    const { data } = await api.post('/sellers/sent/login-top', { email });
    return { email };
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Failed to send OTP');
  }
});

// Thunk para verificar OTP de login
export const verifyLoginOtp = createAsyncThunk<
  { jwt: string },
  { email: string; otp: string; navigate: any },
  { rejectValue: string }
>(
  'otp/verifyLoginOtp',
  async (data, { rejectWithValue }) => {
    try {
      const response = await api.post('/sellers/verify/login-top', data);
      localStorage.setItem('jwt', response.data.jwt);
      data.navigate('/seller');
      return { jwt: response.data.jwt };
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to verify OTP');
    }
  }
);

// Thunk para crear un nuevo vendedor
export const createSeller = createAsyncThunk<
  Seller,
  Seller,
  { rejectValue: string }
>(
  'sellers/createSeller',
  async (seller, { rejectWithValue }) => {
    try {
      const response = await api.post<Seller>(API_URL, seller);
      return response.data;
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        return rejectWithValue(error.message);
      } else {
        return rejectWithValue('Failed to create seller');
      }
    }
  }
);

// Acción asíncrona para login de vendedor. Guarda el JWT en localStorage.
export const sellerLogin = createAsyncThunk<
  any,
  any,
  { rejectValue: string }
>(
  '/sellerAuth/signin',
  async (LoginRequest, { rejectWithValue }) => {
    try {
      const response = await api.post(`/sellers/login`, LoginRequest);
      console.log('login otp ', response.data);
      const jwt = response.data.jwt;
      localStorage.setItem('jwt', jwt);
      return response.data;
    } catch (error: any) {
      console.log('error - - -', error);
      return rejectWithValue(error.response?.data?.message || 'Failed to login seller');
    }
  }
);

// Slice principal
const sellerAuthSlice = createSlice({
  name: 'sellerAuth',
  initialState,
  reducers: {
    resetSellerAuthState: (state) => {
      state.otpSent = false;
      state.error = null;
      state.loading = false;
      state.jwt = null;
      state.sellerCreated = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // sendLoginOtp
      .addCase(sendLoginOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendLoginOtp.fulfilled, (state) => {
        state.loading = false;
        state.otpSent = true;
        state.error = null;
      })
      .addCase(sendLoginOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to send OTP';
      })
      // verifyLoginOtp
      .addCase(verifyLoginOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifyLoginOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.jwt = action.payload.jwt;
        state.error = null;
      })
      .addCase(verifyLoginOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to verify OTP';
      })
      // createSeller
      .addCase(createSeller.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createSeller.fulfilled, (state) => {
        state.sellerCreated = 'verification email sent to you';
        state.loading = false;
      })
      .addCase(createSeller.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to create seller';
      })
      // sellerLogin
      .addCase(sellerLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sellerLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.jwt = action.payload.jwt;
        state.error = null;
      })
      .addCase(sellerLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to login seller';
      });
  },
});

// Selectores para acceder al estado desde los componentes
export const selectSellerAuthOtpSent = (state: RootState) => state.sellerAuth.otpSent;
export const selectSellerAuthError = (state: RootState) => state.sellerAuth.error;
export const selectSellerAuthLoading = (state: RootState) => state.sellerAuth.loading;
export const selectSellerAuthJwt = (state: RootState) => state.sellerAuth.jwt;
export const selectSellerCreated = (state: RootState) => state.sellerAuth.sellerCreated;

export const { resetSellerAuthState } = sellerAuthSlice.actions;
export default sellerAuthSlice.reducer;