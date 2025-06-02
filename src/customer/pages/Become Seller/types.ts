// Tipos compartidos para el formulario de registro de vendedor

// Dirección de recolección: contiene la información de dónde se recogerán los productos
export interface PickupAddress {
  name: string;        // Nombre de contacto para la recolección
  mobile: string;      // Número de teléfono de contacto
  pincode: string;     // Código postal
  address: string;     // Dirección detallada
  locality: string;    // Barrio o zona
  city: string;        // Ciudad
  state: string;       // Estado o provincia
}

// Detalles bancarios del vendedor
export interface BankDetails {
  accountNumber: string;       // Número de cuenta bancaria
  ifscCode: string;            // Código IFSC (para bancos en India)
  accountHolderName: string;   // Nombre del titular de la cuenta
}

// Información del negocio del vendedor
export interface BusinessDetails {
  businessName: string;        // Nombre del negocio
  businessEmail: string;       // Correo electrónico del negocio
  businessMobile: string;      // Teléfono del negocio
  logo: string;                // URL o ruta del logo del negocio
  banner: string;              // URL o ruta del banner del negocio
  businessAddress: string;     // Dirección del negocio
}

// Valores completos del formulario de registro del vendedor
export interface FormValues {
  mobile: string;                // Número de móvil del vendedor
  otp: string;                   // Código OTP (para verificación)
  gstin: string;                 // Número de identificación fiscal (GST)
  pickupAddress: PickupAddress; // Dirección de recolección (usa el tipo definido arriba)
  bankDetails: BankDetails;     // Datos bancarios (usa el tipo definido arriba)
  sellerName: string;           // Nombre del vendedor
  email: string;                // Correo electrónico del vendedor
  businessDetails: BusinessDetails; // Información del negocio (usa el tipo definido arriba)
  password: string;             // Contraseña para acceder a la cuenta
}
