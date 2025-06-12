import { 
  Box, 
  Button, 
  FormControl, 
  FormHelperText, 
  InputLabel, 
  MenuItem, 
  Select, 
  TextField, 
  Typography,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { createDeal, resetDealState } from '../../../State/admin/DealSlice';

// Formulario para crear una nueva oferta desde el panel de administración.
// Utiliza Formik para manejo de estado y validación del formulario.
// Permite ingresar descuento y seleccionar categoría.

const validationSchema = Yup.object({
  discount: Yup.number()
    .required('El descuento es requerido')
    .min(1, 'El descuento debe ser al menos 1%')
    .max(100, 'El descuento no puede exceder 100%'),
  category: Yup.string()
    .required('La categoría es requerida'),
});

const CreateDealForm = () => {
  const { homePage } = useAppSelector(store => store);
  const { loading, error, dealCreated } = useAppSelector(store => store.adminDeals);
  const dispatch = useAppDispatch();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const formik = useFormik({
    initialValues: {
      discount: 0,
      category: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(createDeal({
        discount: values.discount,
        category: {
          id: values.category
        }
      }));
    },
  });

  useEffect(() => {
    if (dealCreated) {
      setSnackbarOpen(true);
      formik.resetForm();
      dispatch(resetDealState());
    }
  }, [dealCreated, dispatch]);
  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ maxWidth: 500, margin: "auto", padding: 3 }}
      className="space-y-6"
    >
      <Typography className='text-center' variant="h4" gutterBottom>
        Crear Oferta
      </Typography>

      <TextField
        fullWidth
        id="discount"
        name="discount"
        label="Descuento"
        type="number"
        value={formik.values.discount}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.discount && Boolean(formik.errors.discount)}
        helperText={formik.touched.discount && formik.errors.discount}
      />

      <FormControl
        fullWidth
        error={formik.touched.category && Boolean(formik.errors.category)}
        required
      >
        <InputLabel id="category-label">Categoría</InputLabel>
        <Select
          labelId="category-label"
          id="category"
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          label="Categoría"
        >
          {homePage.homePageData?.dealCategories.map((item) => (
            <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
          ))}
        </Select>
        {formik.touched.category && formik.errors.category && (
          <FormHelperText>{formik.errors.category}</FormHelperText>
        )}
      </FormControl>

      <Button
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        sx={{ py: ".9rem" }}
        disabled={loading}
      >
        {loading ? (
          <CircularProgress size={24} />
        ) : (
          "Crear Oferta"
        )}
      </Button>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={error ? "error" : "success"}
          variant="filled"
        >
          {error ? error : "Oferta creada exitosamente"}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default CreateDealForm