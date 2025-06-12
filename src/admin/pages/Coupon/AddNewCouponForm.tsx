import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Box,
  Grid,
  Alert,
  Snackbar,
  CircularProgress
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { createCoupon } from '../../../State/admin/AdminCouponSlice';




interface CouponFormValues {
  code: string;
  discountPercentage: number;
  validityStartDate: Dayjs | null;
  validityEndDate: Dayjs | null;
  minimumOrderValue: number;
}

const AddNewCouponForm = () => {
  const dispatch = useAppDispatch();
  const { adminCoupon } = useAppSelector((state) => state);
  const [snackbarOpen, setOpenSnackbar] = useState(false);

  const formik = useFormik<CouponFormValues>({
    initialValues: {
      code: "",
      discountPercentage: 0,
      validityStartDate: null,
      validityEndDate: null,
      minimumOrderValue: 0,
    },
    validationSchema: Yup.object({
      code: Yup.string()
        .required("El código del cupón es requerido")
        .min(3, "El código debe tener al menos 3 caracteres")
        .max(20, "El código no debe exceder 20 caracteres"),
      discountPercentage: Yup.number()
        .required("El porcentaje de descuento es requerido")
        .min(1, "El descuento debe ser al menos 1%")
        .max(100, "El descuento no puede exceder 100%"),
      validityStartDate: Yup.date()
        .nullable()
        .required("La fecha de inicio es requerida")
        .typeError("Fecha inválida"),
      validityEndDate: Yup.date()
        .nullable()
        .required("La fecha de finalización es requerida")
        .typeError("Fecha inválida")
        .min(
          Yup.ref("validityStartDate"),
          "La fecha final no puede ser anterior a la fecha inicial"
        ),
      minimumOrderValue: Yup.number()
        .required("El valor mínimo de orden es requerido")
        .min(1, "El valor mínimo debe ser al menos 1"),
    }),    onSubmit: (values) => {
      const formattedValues = {
        code: values.code,
        discountPercentage: values.discountPercentage,
        validityStartDate: values.validityStartDate
          ? values.validityStartDate.toISOString()
          : null,
        validityEndDate: values.validityEndDate
          ? values.validityEndDate.toISOString()
          : null,
        minimumOrderValue: values.minimumOrderValue,
      };
      dispatch(createCoupon({ coupon: formattedValues }));
    },
  });  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  useEffect(() => {
    if (adminCoupon.couponCreated) {
      setOpenSnackbar(true);
    }
  }, [adminCoupon.couponCreated]);

  return (
    <div className="max-w-3xl">
      <h1 className='text-2xl font-bold text-primary-color pb-5 text-clip'>Crear nuevo cupón</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="code"
                name="code"
                label="Código de Cupón"
                value={formik.values.code}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.code && Boolean(formik.errors.code)}
                helperText={formik.touched.code && formik.errors.code}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="discountPercentage"
                name="discountPercentage"
                label="Porcentaje de Descuento"
                type="number"
                value={formik.values.discountPercentage}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.discountPercentage && Boolean(formik.errors.discountPercentage)}
                helperText={formik.touched.discountPercentage && formik.errors.discountPercentage}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                sx={{ width: "100%" }}
                label="Fecha de Inicio"
                value={formik.values.validityStartDate}
                onChange={(date) => formik.setFieldValue("validityStartDate", date)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <DatePicker
                sx={{ width: "100%" }}
                label="Fecha de Finalización"
                value={formik.values.validityEndDate}
                onChange={(date) => formik.setFieldValue("validityEndDate", date)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="minimumOrderValue"
                name="minimumOrderValue"
                label="Valor Mínimo de Orden"
                type="number"
                value={formik.values.minimumOrderValue}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.minimumOrderValue && Boolean(formik.errors.minimumOrderValue)}
                helperText={formik.touched.minimumOrderValue && formik.errors.minimumOrderValue}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                color="primary"
                variant="contained"
                type="submit"
                sx={{ mt: 2, py: '.8rem' }}
                fullWidth
                disabled={adminCoupon.loading}
              >
                {adminCoupon.loading ? (
                  <CircularProgress size={24} />
                ) : (
                  "Crear Cupón"
                )}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </LocalizationProvider>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={adminCoupon.error ? "error" : "success"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {adminCoupon.error ? adminCoupon.error : "Cupón creado exitosamente"}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default AddNewCouponForm