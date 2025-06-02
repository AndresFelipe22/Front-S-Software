// Importamos React
import React from 'react';

// Importamos componentes de Material UI para el diseño y los campos del formulario
import { Box, TextField } from '@mui/material';

// Grid2 es una versión inestable del sistema de grid de Material UI (como una cuadrícula para organizar los campos)
import Grid2 from '@mui/material/Unstable_Grid2';

// Importamos los tipos necesarios para usar Formik correctamente
import { FormikProps } from 'formik';
import { FormValues } from './types'; // Tipo que define la estructura del formulario

// Definimos los props que recibe este componente
interface Props {
  formik: FormikProps<FormValues>; // El componente recibe todos los datos y funciones que maneja Formik
}

// Componente del paso 2 del formulario para convertirse en vendedor
const BecomeSellerFormStep2: React.FC<Props> = ({ formik }) => {
  // Obtenemos directamente el objeto de dirección de recogida desde los valores del formulario
  const pickupAddress = formik.values.pickupAddress;

  return (
    <Box>
      {/* Contenedor tipo grid con espacio entre columnas/filas */}
      <Grid2 container spacing={3}>

        {/* Campo: Nombre de quien recogerá el producto */}
        <Grid2 xs={12}>
          <TextField
            fullWidth
            name="pickupAddress.name"
            label="Name"
            value={pickupAddress.name}
            onChange={formik.handleChange}
            error={formik.touched.pickupAddress?.name && Boolean(formik.errors.pickupAddress?.name)}
            helperText={formik.touched.pickupAddress?.name && formik.errors.pickupAddress?.name}
          />
        </Grid2>

        {/* Campo: Móvil de contacto */}
        <Grid2 xs={6}>
          <TextField
            fullWidth
            name="pickupAddress.mobile"
            label="Mobile"
            value={pickupAddress.mobile}
            onChange={formik.handleChange}
            error={formik.touched.pickupAddress?.mobile && Boolean(formik.errors.pickupAddress?.mobile)}
            helperText={formik.touched.pickupAddress?.mobile && formik.errors.pickupAddress?.mobile}
          />
        </Grid2>

        {/* Campo: Dirección completa */}
        <Grid2 xs={12}>
          <TextField
            fullWidth
            name="pickupAddress.address"
            label="Address"
            value={pickupAddress.address}
            onChange={formik.handleChange}
            error={formik.touched.pickupAddress?.address && Boolean(formik.errors.pickupAddress?.address)}
            helperText={formik.touched.pickupAddress?.address && formik.errors.pickupAddress?.address}
          />
        </Grid2>

        {/* Campo: Localidad o zona */}
        <Grid2 xs={12}>
          <TextField
            fullWidth
            name="pickupAddress.locality"
            label="Locality"
            value={pickupAddress.locality}
            onChange={formik.handleChange}
            error={formik.touched.pickupAddress?.locality && Boolean(formik.errors.pickupAddress?.locality)}
            helperText={formik.touched.pickupAddress?.locality && formik.errors.pickupAddress?.locality}
          />
        </Grid2>

        {/* Campo: Ciudad */}
        <Grid2 xs={6}>
          <TextField
            fullWidth
            name="pickupAddress.city"
            label="City"
            value={pickupAddress.city}
            onChange={formik.handleChange}
            error={formik.touched.pickupAddress?.city && Boolean(formik.errors.pickupAddress?.city)}
            helperText={formik.touched.pickupAddress?.city && formik.errors.pickupAddress?.city}
          />
        </Grid2>

        {/* Campo: Estado o provincia */}
        <Grid2 xs={6}>
          <TextField
            fullWidth
            name="pickupAddress.state"
            label="State"
            value={pickupAddress.state}
            onChange={formik.handleChange}
            error={formik.touched.pickupAddress?.state && Boolean(formik.errors.pickupAddress?.state)}
            helperText={formik.touched.pickupAddress?.state && formik.errors.pickupAddress?.state}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};

// Exportamos el componente para poder usarlo en otros archivos
export default BecomeSellerFormStep2;
