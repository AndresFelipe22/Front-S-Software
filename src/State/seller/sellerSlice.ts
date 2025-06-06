import { createAsyncThunk } from "@reduxjs/toolkit";
import {api} from "../../config/api";

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
    } catch (error) {
      console.log("error - - -", error);
    }
  }
);
