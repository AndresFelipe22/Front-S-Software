import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { api } from "../../config/api";
import { User, UserState } from "../../types/userTypes";
import { RootState } from "../Store";

// Estado inicial del usuario
const initialState: UserState = {
  user: null,
  loading: false,
  error: null,
  profileUpdated: false,
};

// URL base para el backend (ajustada a la convención del proyecto)
const API_URL = "/users";

// Thunk para obtener el perfil del usuario autenticado
export const fetchUserProfile = createAsyncThunk<
  User,
  { jwt: string; navigate: (path: string) => void }
>(
  "user/fetchUserProfile",
  async (
    { jwt, navigate },
    { rejectWithValue }
  ) => {
    try {
      const response = await api.get(`${API_URL}/profile`, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      // Redirección según rol (ajustar rutas si es necesario)
      if (response.data.role === "ROLE_ADMIN") {
        navigate("/admin");
      }
      return response.data;
    } catch (error: any) {
      return rejectWithValue("Failed to fetch user profile");
    }
  }
);

// Slice de usuario
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserState: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
      state.profileUpdated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUserProfile.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.user = action.payload;
          state.loading = false;
        }
      )
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetUserState } = userSlice.actions;
export default userSlice.reducer;

// Selectores para acceder al estado del usuario
export const selectUser = (state: RootState) => state.user.user;
export const selectUserLoading = (state: RootState) => state.user.loading;
export const selectUserError = (state: RootState) => state.user.error;