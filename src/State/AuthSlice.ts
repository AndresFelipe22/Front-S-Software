import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/api";

// Thunk para enviar OTP de login/signup.
// Parámetros: { email } - email del usuario.
// Realiza una petición GET a la API para enviar el OTP y muestra la respuesta en consola.
export const sendLoginSignupOtp = createAsyncThunk(
  "/auth/sendLoginSignupOtp",
  async ({ email }: { email: string }, { rejectWithValue }) => {
    try {
      const response = await api.get(`/auth/sent/login-signup-otp`);
      console.log("login otp ", response);
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);
