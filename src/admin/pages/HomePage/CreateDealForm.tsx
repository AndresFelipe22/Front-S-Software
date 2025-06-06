import { Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react'

// Formulario para crear una nueva oferta desde el panel de administración.
// Utiliza Formik para manejo de estado y validación del formulario.
// Permite ingresar descuento y seleccionar categoría.

const CreateDealForm = () => {
  const formik = useFormik({
    initialValues: {
      discount: 0,
      category: "",
    },
    onSubmit: (values) => {
      console.log("submit ", values);
    },
});


  return (
    
    <Box component={"form"} onSubmit={formik.handleSubmit} className="space-y-6">
      <Typography variant="h4" className="text-center">
        Crear Oferta
      </Typography>
      <TextField
        fullWidth
        name='discount'
        label="Descuento"
        value={formik.values.discount}
        onChange={formik.handleChange}
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
         <MenuItem value="electronics">Electronics</MenuItem>
         <MenuItem value="fashion">Fashion</MenuItem> 
        </Select>
      </FormControl>
       <Button color="primary" variant="contained" fullWidth type="submit" sx={{ py: ".9rem" }}>
        Submit
      </Button>
        
    </Box>
  );
}

export default CreateDealForm