import { Box, Button, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import React from 'react'

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
        Create Deal
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
        <InputLabel id="category-label">Category</InputLabel>
        <Select
          labelId="category-label"
          id="category"
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          label="Category"
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