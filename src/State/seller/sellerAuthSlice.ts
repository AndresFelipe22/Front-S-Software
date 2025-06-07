// Slice para autenticación y sesión de vendedores. Maneja el login y almacenamiento del JWT en localStorage.
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/api";

// Acción asíncrona para login de vendedor. Guarda el JWT en localStorage.
export const sellerLogin = createAsyncThunk<any, any>(
  "/sellerAuth/signin",
  async (LoginRequest , { rejectWithValue }) => {
    try {
      const response = await api.post(`/sellers/login`, LoginRequest);
      console.log("login otp ", response.data);
      const jwt = response.data.jwt;
      localStorage.setItem("jwt", jwt);
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);