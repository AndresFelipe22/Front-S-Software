// Tipos y contratos para reviews de productos en el ecommerce
import { Product } from "./ProductTypes";
import { User } from "./userTypes";

/**
 * Representa un review/comentario de un usuario sobre un producto.
 */
export interface Review {
  /** ID único del review */
  id: number;
  /** Texto del comentario */
  reviewText: string;
  /** Calificación numérica (1-5) */
  rating: number;
  /** Usuario que realizó el review */
  user: User;
  /** Producto al que pertenece el review */
  product: Product;
  /** Imágenes asociadas al producto en el review */
  productImages: string[];
  /** Fecha de creación */
  createdAt: string;
  /** Fecha de última actualización */
  updatedAt: string;
}

/**
 * Payload para crear o actualizar un review.
 */
export interface CreateReviewRequest {
  /** Texto del comentario */
  reviewText: string;
  /** Calificación numérica (1-5) */
  reviewRating: number;
}

/**
 * Respuesta genérica de la API para operaciones de review.
 */
export interface ApiResponse {
  /** Mensaje de la operación */
  message: string;
  /** Estado de éxito o error */
  status: boolean;
}

/**
 * Estado global de reviews en Redux.
 */
export interface ReviewState {
  /** Lista de reviews del producto */
  reviews: Review[];
  /** Estado de carga */
  loading: boolean;
  /** Mensaje de error (si existe) */
  error: string | null;
  /** Bandera: review creado exitosamente */
  reviewCreated: boolean;
  /** Bandera: review actualizado exitosamente */
  reviewUpdated: boolean;
  /** Bandera: review eliminado exitosamente */
  reviewDeleted: boolean;
}
