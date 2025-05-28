import React from 'react';
import { Box, TextField } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { FormikProps } from 'formik';
import { FormValues } from './types'; // Importa el tipo correcto

interface Props {
  formik: FormikProps<FormValues>;
}

const BecomeSellerFormStep2: React.FC<Props> = ({ formik }) => {
  // Accede al sub-objeto pickupAddress para mayor comodidad
  const pickupAddress = formik.values.pickupAddress;

  return (
    <Box>
      <Grid2 container spacing={3}>
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

export default BecomeSellerFormStep2;
