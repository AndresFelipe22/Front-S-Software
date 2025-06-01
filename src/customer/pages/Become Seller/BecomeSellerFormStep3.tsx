// Importamos React
import React from 'react';

// Importamos Box y TextField de Material UI para el diseño y los campos de texto
import { Box, TextField } from '@mui/material';

// Importamos tipos de Formik para manejar el formulario correctamente
import { FormikProps } from 'formik';
import { FormValues } from './types'; // Tipo que define la estructura de los datos del formulario

// Definimos las propiedades que espera este componente
interface BecomeSellerFormStep3Props {
  formik: FormikProps<FormValues>; // Recibe las funciones y datos del formulario de Formik
}

// Componente que representa el paso 3 del formulario: Detalles bancarios
const BecomeSellerFormStep3: React.FC<BecomeSellerFormStep3Props> = ({ formik }) => {
  return (
    <Box>
      {/* Título del formulario */}
      <p className='text-xl font-bold text-center pb-9'>Bank Details</p>

      {/* Contenedor vertical con separación entre los campos */}
      <div className='space-y-5'>

        {/* Campo: Número de cuenta */}
        <TextField
          fullWidth
          name="bankDetails.accountNumber" // Nombre del campo (para que Formik lo reconozca)
          label="Account Number"          // Etiqueta visible para el usuario
          value={formik.values.bankDetails.accountNumber} // Valor actual del campo
          onChange={formik.handleChange}   // Formik actualiza el valor cuando el usuario escribe
          onBlur={formik.handleBlur}       // Marca el campo como "tocado" cuando se pierde el foco
          error={                          // Muestra error si el campo fue tocado y tiene errores
            formik.touched.bankDetails?.accountNumber &&
            Boolean(formik.errors.bankDetails?.accountNumber)
          }
          helperText={                     // Texto de ayuda con el mensaje de error
            formik.touched.bankDetails?.accountNumber &&
            formik.errors.bankDetails?.accountNumber
          }
        />

        {/* Campo: Código IFSC (identificador del banco) */}
        <TextField
          fullWidth
          name="bankDetails.ifscCode"
          label="IFSC Code"
          value={formik.values.bankDetails.ifscCode}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.bankDetails?.ifscCode &&
            Boolean(formik.errors.bankDetails?.ifscCode)
          }
          helperText={
            formik.touched.bankDetails?.ifscCode &&
            formik.errors.bankDetails?.ifscCode
          }
        />

        {/* Campo: Nombre del titular de la cuenta */}
        <TextField
          fullWidth
          name="bankDetails.accountHolderName"
          label="Account Holder Name"
          value={formik.values.bankDetails.accountHolderName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.bankDetails?.accountHolderName &&
            Boolean(formik.errors.bankDetails?.accountHolderName)
          }
          helperText={
            formik.touched.bankDetails?.accountHolderName &&
            formik.errors.bankDetails?.accountHolderName
          }
        />
      </div>
    </Box>
  );
};

// Exportamos el componente para poder usarlo en otros archivos
export default BecomeSellerFormStep3;
