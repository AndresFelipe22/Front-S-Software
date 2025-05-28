import React from 'react';
import { Box, TextField } from '@mui/material';
import { FormikProps } from 'formik';

interface FormValues {
  bankDetails: {
    accountNumber: string;
    ifscCode: string;
    accountHolderName: string;
  };
}

interface BecomeSellerFormStep3Props {
  formik: FormikProps<FormValues>;
}

const BecomeSellerFormStep3: React.FC<BecomeSellerFormStep3Props> = ({ formik }) => {
  return (
    <Box>
      <p className='text-xl font-bold text-center pb-9'>Bank Details</p>
      <div className='space-y-5'>
        <TextField
          fullWidth
          name="bankDetails.accountNumber"
          label="Account Number"
          value={formik.values.bankDetails.accountNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.bankDetails?.accountNumber &&
            Boolean(formik.errors.bankDetails?.accountNumber)
          }
          helperText={
            formik.touched.bankDetails?.accountNumber &&
            formik.errors.bankDetails?.accountNumber
          }
        />
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

export default BecomeSellerFormStep3;
