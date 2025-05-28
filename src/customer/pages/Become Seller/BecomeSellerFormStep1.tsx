import React from 'react';
import { Box, TextField } from '@mui/material';
import { FormikProps } from 'formik';

interface FormValues {
  mobile: string;
  GSTIN: string;
}

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
          name="GSTIN"
          label="GSTIN"
          value={formik.values.GSTIN}
          onChange={formik.handleChange}
          error={formik.touched.GSTIN && Boolean(formik.errors.GSTIN)}
          helperText={formik.touched.GSTIN && formik.errors.GSTIN}
        />
      </Box>
    </Box>
  );
};

export default BecomeSellerFormStep1;
