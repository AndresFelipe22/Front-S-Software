import React from 'react';
import { Box, TextField } from '@mui/material';
import { FormikProps } from 'formik';
import { FormValues } from './types';

interface Props {
  formik: FormikProps<FormValues>;
}

const BecomeSellerFormStep1: React.FC<Props> = ({ formik }) => {
  return (
    <Box>
      <p className='text-xl font-bold text-center pb-9'>Contact Details</p>

      <Box display="flex" flexDirection="column" gap={4}>
        <TextField
          fullWidth
          name="mobile"
          label="Mobile"
          value={formik.values.mobile}
          onChange={formik.handleChange}
          error={formik.touched.mobile && Boolean(formik.errors.mobile)}
          helperText={formik.touched.mobile && formik.errors.mobile}
        />

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

export default BecomeSellerFormStep1;
