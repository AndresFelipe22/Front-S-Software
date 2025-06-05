import { Dayjs } from 'dayjs';
import { useFormik } from 'formik';
import React from 'react'
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, Button, TextField } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';
import { DatePicker } from "@mui/x-date-pickers/DatePicker";




interface CouponFormValues {
  code: string;
  discountPercentage: number;
  validityStartDate: Dayjs | null;
  validityEndDate: Dayjs | null;
  minimumOrderValue: number;
}

const AddNewCouponForm = () => {
  const formik = useFormik<CouponFormValues>({
      initialValues: {
        code: "",
        discountPercentage: 0,
        validityStartDate: null,
        validityEndDate: null,
        minimumOrderValue: 0
      },
      onSubmit: (values) => {
        console.log("form submited", values);
        const formattedValues = {
          ...values,
          validityStartDate: values.validityStartDate
            ? values.validityStartDate.toISOString()
            : null,
          validityEndDate: values.validityEndDate
            ? values.validityEndDate.toISOString()
            : null,
        };
        console.log("Form Values:", formattedValues);
      }
    });
  return (
    <div>
      <h1 className='text-2xl font-bold text-primary-color pb-5 text-clip'>Crear nuevo cupón</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box component={"form"} onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
          <Grid2 container spacing={2}>
            <Grid2 xs={12} sm={6}>
            <TextField
                fullWidth
                name='discountPercentage'
                label="Descuento del cupón %"
                value={formik.values.discountPercentage}
                onChange={formik.handleChange}
                error={formik.touched.discountPercentage && Boolean(formik.errors.discountPercentage)}
                helperText={formik.touched.discountPercentage && formik.errors.discountPercentage}
                />
          </Grid2>
          <Grid2 xs={12} sm={6}>
              <DatePicker
                sx={{ width: "100%" }}
                label="Fecha de inicio"
                value={formik.values.validityStartDate}
                onChange={(date) =>
                  formik.setFieldValue("validityStartDate", date)
                }
              />
            </Grid2>
            <Grid2 xs={12} sm={6}>
              <DatePicker
                sx={{ width: "100%" }}
                label="Fecha de finalización"
                value={formik.values.validityEndDate}
                onChange={(date) =>
                  formik.setFieldValue("validityEndDate", date)
                }
              />
            </Grid2>
            <Grid2 xs={12} sm={6}>
              <TextField
                  fullWidth
                  name='minimumOrderValue'
                  label="Valor mínimo de orden"
                  value={formik.values.minimumOrderValue}
                  onChange={formik.handleChange}
                  error={formik.touched.minimumOrderValue && Boolean(formik.errors.minimumOrderValue)}
                  helperText={formik.touched.minimumOrderValue && formik.errors.minimumOrderValue}
                  />
          </Grid2>
          <Grid2 xs={12}>
            <Button color="primary" variant="contained" type="submit" sx={{ py:'.8rem' }} fullWidth>
              Crear cupón
            </Button>
          </Grid2>
          </Grid2>
        </Box>
      </LocalizationProvider>


    </div>
  )
}

export default AddNewCouponForm