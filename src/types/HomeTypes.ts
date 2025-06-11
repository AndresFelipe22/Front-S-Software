// Tipos y contratos para la página principal (home) del ecommerce

/**
 * Representa una categoría mostrada en la home (grilla, shop by category, etc).
 */
export interface HomeCategory {
  /** ID único de la categoría (opcional, depende de la fuente de datos) */
  id?: number;
  /** Identificador de la categoría (string único, ej: 'peripherals') */
  categoryId: string;
  /** Sección de la home donde se muestra (opcional) */
  section?: string;
  /** Nombre visible de la categoría */
  name?: string;
  /** URL de la imagen representativa */
  image: string;
  /** ID de la categoría padre (opcional) */
  parentCategoryId?: string;
}

/**
 * Representa una oferta/deal destacada en la home.
 */
export interface Deal {
  /** Categoría asociada a la oferta */
  category: HomeCategory;
  /** Porcentaje de descuento aplicado */
  discount: number;
}

/**
 * Estructura principal de los datos de la página de inicio (home).
 */
export interface HomeData {
  /** ID del registro de home (puede ser útil para edición/admin) */
  id: number;
  /** Categorías para la grilla principal */
  grid: HomeCategory[];
  /** Categorías para la sección 'Shop by Category' */
  shopByCategories: HomeCategory[];
  /** Categorías eléctricas/destacadas */
  electricCategories: HomeCategory[];
  /** Ofertas destacadas */
  deals: Deal[];
  /** Categorías asociadas a ofertas */
  dealCategories: HomeCategory[];
}
