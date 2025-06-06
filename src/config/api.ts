import axios from "axios";

// Configuración centralizada de Axios para peticiones HTTP a la API.
// Define la URL base y los headers por defecto.
export const API_URL = "http://localhost:8080";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  }
});
