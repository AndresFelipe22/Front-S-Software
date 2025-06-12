import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { updateDeal } from '../../../State/admin/DealSlice';
import { fetchHomeCategories } from '../../../State/admin/AdminSlice';
import { Deal } from '../../../types/DealTypes';

interface UpdateDealFormProps {
  dealId: number;
  handleClose: () => void;
}

const validationSchema = Yup.object({
  discount: Yup.number()
    .required('El descuento es requerido')
    .min(1, 'El descuento debe ser al menos 1%')
    .max(100, 'El descuento no puede exceder 100%'),
  categoryId: Yup.string()
    .required('La categoría es requerida'),
});

const UpdateDealForm: React.FC<UpdateDealFormProps> = ({ dealId, handleClose }) => {
  const dispatch = useAppDispatch();
  const { deals, loading } = useAppSelector((state) => state.adminDeals);
  const { homePageData } = useAppSelector((state) => state.homePage);
  const deal = deals.find(d => d.id === dealId);

  useEffect(() => {
    dispatch(fetchHomeCategories());
  }, [dispatch]);
  
  const formik = useFormik({
    initialValues: {
      discount: deal?.discount || 0,
      categoryId: deal?.category.categoryId || '',
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(updateDeal({
        id: dealId,
        discount: values.discount,
        category: {
          categoryId: values.categoryId,
          image: homePageData?.dealCategories.find(cat => cat.categoryId === values.categoryId)?.image || '',
          name: homePageData?.dealCategories.find(cat => cat.categoryId === values.categoryId)?.name || ''
        }
      }))
      .then(() => handleClose());
    },
  });

  if (!deal) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" padding={3}>
        <Typography color="error">Oferta no encontrada</Typography>
      </Box>
    );
  }

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ p: 3 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Actualizar Oferta
      </Typography>

      <TextField
        fullWidth
        id="discount"
        name="discount"
        label="Descuento (%)"
        type="number"
        value={formik.values.discount}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.discount && Boolean(formik.errors.discount)}
        helperText={formik.touched.discount && formik.errors.discount}
        margin="normal"
      />

      <FormControl 
        fullWidth 
        margin="normal"
        error={formik.touched.categoryId && Boolean(formik.errors.categoryId)}
      >
        <InputLabel>Categoría</InputLabel>
        <Select
          name="categoryId"
          value={formik.values.categoryId}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          label="Categoría"
        >
          {homePageData?.dealCategories.map((category) => (
            <MenuItem key={category.categoryId} value={category.categoryId}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
        {formik.touched.categoryId && formik.errors.categoryId && (
          <FormHelperText>{formik.errors.categoryId}</FormHelperText>
        )}
      </FormControl>

      <Button
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        disabled={loading}
        sx={{ mt: 3, py: 1.5 }}
      >
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          'Actualizar Oferta'
        )}
      </Button>
    </Box>
  );
};

export default UpdateDealForm;
