import axios from "axios";



const api = "http://localhost:8080/products";
// Función utilitaria para obtener productos desde la API.
// Realiza una petición GET a la URL definida y muestra la respuesta en consola.
// Usada para cargar productos al iniciar la app.
export const fetchProducts = async () => {
  try {
    const response = await axios.get(api);
    console.log("response", response);
  } catch (error) {
    console.error(error);
  }
};
