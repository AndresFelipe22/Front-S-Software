import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/api";

// Envía OTP para login/signup al email indicado.
// Parámetros: { email } - email del usuario.
// Realiza una petición GET a la API para enviar el OTP y muestra la respuesta en consola.
export const sendLoginSignupOtp = createAsyncThunk(
  "/auth/sendLoginSignupOtp",
  async ({email}: { email:string }, { rejectWithValue }) => {
    try {
      const response = await api.post(`/auth/sent/login-signup-otp`,{email});
      console.log("login otp ", response);
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);

// Inicia sesión de usuario con credenciales.
// Parámetros: LoginRequest - Objeto con email y password del usuario.
export const signin = createAsyncThunk<any, any>(
  "/auth/signin",
  async (LoginRequest , { rejectWithValue }) => {
    try {
      const response = await api.post(`/auth/signin`, LoginRequest);
      console.log("login otp ", response.data);
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);

