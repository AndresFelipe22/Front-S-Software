// Importamos React para poder usar JSX
import React from 'react';

// Importamos el componente TextField de Material UI para los campos de entrada
import { TextField } from '@mui/material';

// Importamos tipos de Formik para manejar formularios
import { FormikProps } from 'formik';
import { FormValues } from './types'; // Tipo que define la estructura del formulario

// Definimos las propiedades que recibe el componente
interface BecomeSellerFormStep4Props {
  formik: FormikProps<FormValues>; // Formik maneja los valores, errores y cambios del formulario
}

// Este componente representa el Paso 4 del formulario para convertirse en vendedor
const BecomeSellerFormStep4: React.FC<BecomeSellerFormStep4Props> = ({ formik }) => {
  return (
    // Contenedor vertical con espacio entre los campos
    <div className="space-y-5">

      {/* Campo: Nombre del negocio */}
      <TextField
        fullWidth
        name="businessDetails.businessName" // Nombre del campo dentro del objeto businessDetails
        label="Business Name"              // Etiqueta visible
        value={formik.values.businessDetails.businessName} // Valor actual
        onChange={formik.handleChange}     // Función para actualizar el valor
        onBlur={formik.handleBlur}         // Marca el campo como tocado cuando se pierde el foco
        error={                            // Muestra error si el campo fue tocado y tiene errores
          formik.touched.businessDetails?.businessName &&
          Boolean(formik.errors.businessDetails?.businessName)
        }
        helperText={                       // Mensaje de error (si lo hay)
          formik.touched.businessDetails?.businessName &&
          formik.errors.businessDetails?.businessName
        }
      />

      {/* Campo: Nombre del vendedor */}
      <TextField
        fullWidth
        name="sellerName"
        label="Seller Name"
        value={formik.values.sellerName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.sellerName && Boolean(formik.errors.sellerName)}
        helperText={formik.touched.sellerName && formik.errors.sellerName}
      />

      {/* Campo: Correo electrónico */}
      <TextField
        fullWidth
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      {/* Campo: Contraseña (se oculta el texto) */}
      <TextField
        fullWidth
        name="password"
        label="Password"
        type="password" // Esto oculta el texto ingresado por seguridad
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
      />
    </div>
  );
};

// Exportamos el componente para poder usarlo en otros archivos
export default BecomeSellerFormStep4;
