// Importamos React
import React from 'react';

// Importamos componentes de la librería Material UI
import { Box, TextField } from '@mui/material';

// Importamos tipos de Formik y los valores esperados del formulario
import { FormikProps } from 'formik';
import { FormValues } from './types';

// Definimos los props que recibe este componente
interface Props {
  formik: FormikProps<FormValues>; // Recibe los datos y funciones de Formik
}

// Componente funcional que representa el paso 1 del formulario para ser vendedor
const BecomeSellerFormStep1: React.FC<Props> = ({ formik }) => {
  return (
    <Box>
      {/* Título del formulario */}
      <p className='text-xl font-bold text-center pb-9'>Detalles de Contacto</p>

      {/* Contenedor para los campos del formulario con espacio entre ellos */}
      <Box display="flex" flexDirection="column" gap={4}>
        
        {/* Campo para ingresar el número de móvil */}
        <TextField
          fullWidth                    // Ocupa todo el ancho disponible
          name="mobile"               // Nombre del campo
          label="Mobile"              // Etiqueta que se muestra al usuario
          value={formik.values.mobile} // Valor actual desde Formik
          onChange={formik.handleChange} // Maneja los cambios con Formik
          error={formik.touched.mobile && Boolean(formik.errors.mobile)} // Muestra error si el campo fue tocado y tiene errores
          helperText={formik.touched.mobile && formik.errors.mobile}     // Texto de ayuda si hay un error
        />

        {/* Campo para ingresar el número GSTIN (registro fiscal) */}
        <TextField
          fullWidth
          name="gstin"
          label="GSTIN"
          value={formik.values.gstin}
          onChange={formik.handleChange}
          error={formik.touched.gstin && Boolean(formik.errors.gstin)}
          helperText={formik.touched.gstin && formik.errors.gstin}
        />
      </Box>
    </Box>
  );
};

// Exportamos el componente para poder usarlo en otros archivos
export default BecomeSellerFormStep1;
