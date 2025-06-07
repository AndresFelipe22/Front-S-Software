import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../config/api";
import { User } from '../../types/userTypes';

export const sendLoginSignUpOtp = createAsyncThunk(
  "/authsendLoginSignUpOtp",
  async ({ email }: { email: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/sent/login-signup-otp", { email });
      console.log("login otp", response);
    } catch (error) {
      console.log("error ---", error);
      return rejectWithValue("Failed to send OTP");
    }
  }
);

export const signup = createAsyncThunk<any, any>(
  "/auth/signup",
  async (signupRequest, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signup", signupRequest);
      console.log("login otp", response.data);
      localStorage.setItem("jwt", response.data.jwt);
      return response.data.jwt;
    } catch (error) {
      console.log("error ---", error);
    }
  }
);

export const fetchUserProfile = createAsyncThunk<any, any>(
  "/auth/fetchUserProfile",
  async ({ jwt }, { rejectWithValue }) => {
    console.log("jwt ----", jwt);
    try {
      const response = await api.get("/api/user/profile", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
      console.log("user profile", response.data);
      return response.data;
    } catch (error) {
      console.log("error ---", error);
    }
  }
);

export const logut = createAsyncThunk<any, any>(
  "/auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      localStorage.clear();
      console.log("logout success");
    } catch (error) {
      console.log("error ---", error);
    }
  }
);

interface AuthState {
  jwt: string | null;
  otpSent: boolean;
  isLoggedIn: boolean;
  user: User | null;
  loading: boolean;
}

const initialState: AuthState = {
  jwt: null,
  otpSent: false,
  isLoggedIn: false,
  user: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(sendLoginSignUpOtp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(sendLoginSignUpOtp.fulfilled, (state) => {
      state.loading = false;
      state.otpSent = true;
    });
    builder.addCase(sendLoginSignUpOtp.rejected, (state) => {
      state.loading = false;
    });

    builder.addCase(signup.fulfilled, (state, action) => {
      state.jwt = action.payload;
    });
    builder.addCase(fetchUserProfile.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    });
    builder.addCase(logut.fulfilled, (state) => {
      state.jwt = null;
      state.isLoggedIn = false;
      state.user = null;
    });
  },
});

export default authSlice.reducer;