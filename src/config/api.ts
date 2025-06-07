// Archivo de configuración de la instancia de API para peticiones HTTP.
// Define la URL base y los headers por defecto.

import axios from "axios";

export const API_URL = "http://localhost:8080";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  }
});
