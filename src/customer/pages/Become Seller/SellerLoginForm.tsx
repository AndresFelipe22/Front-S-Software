import React from 'react';
import { useFormik } from 'formik'; // Hook para manejar formularios fácilmente
import { TextField, Button } from '@mui/material'; // Componentes de Material UI

// Componente para el formulario de login del vendedor
const SellerLoginForm = () => {
  // Inicializamos formik para manejar valores y envío del formulario
  const formik = useFormik({
    initialValues: {
      email: '', // Valor inicial del campo email
      otp: '',   // Valor inicial del campo OTP (código de verificación)
    },
    onSubmit: (values) => {
      // Acción al enviar el formulario: mostramos los valores en consola
      console.log('form data', values);
    },
  });

  return (
    <div>
      {/* Título del formulario */}
      <h1 className="text-center font-bold text-xl text-primary-color pb-5">
        Login As Seller
      </h1>

      {/* Formulario */}
      <form onSubmit={formik.handleSubmit} className="space-y-5">
        {/* Campo de texto para el email */}
        <TextField
          fullWidth
          name="email"
          label="Email"
          value={formik.values.email} // Valor actual
          onChange={formik.handleChange} // Actualiza valor al escribir
          onBlur={formik.handleBlur} // Marca el campo como "tocado" al salir
          error={formik.touched?.email && Boolean(formik.errors.email)} // Muestra error si es necesario
          helperText={formik.touched?.email && formik.errors.email} // Mensaje de error si aplica
        />

        {/* Campo para ingresar OTP (simulado siempre visible con `true`) */}
        {true && (
          <div className="space-y-2">
            <p className="font-medium text-sm opacity-60">
              Enter OTP sent to your email
            </p>

            {/* Campo de texto para el OTP */}
            <TextField
              fullWidth
              name="otp"
              label="Otp"
              value={formik.values.otp}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched?.otp && Boolean(formik.errors.otp)}
              helperText={formik.touched?.otp && formik.errors.otp}
            />
          </div>
        )}

        {/* Botón para enviar el formulario */}
        <Button type="submit" variant="contained" fullWidth>
          Login
        </Button>
      </form>
    </div>
  );
};

export default SellerLoginForm;
