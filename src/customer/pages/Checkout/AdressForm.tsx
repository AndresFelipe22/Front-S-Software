import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useFormik } from 'formik';
import { Formik } from 'formik';
import React from 'react';
// ...existing code...

const AdressForm = () => {
        const formik = useFormik({
        initialValues: {
            name: '',
            mobile: '',
            pinCode: '',
            address: '',
            city: '',
            state: '',
            Locality: '',
        },
        validationSchema: {},
        onSubmit: (values) => {
            console.log(values);
        },
    })
  return (
    <Box sx={{minWidth:600, max:"auto"}}>
        <p className='text-xl font-bold text-center pb-5'>Detalles de Contacto</p>

        <form>
            <Grid2 container spacing={8}>
                <Grid2 xs={12}>

                    <TextField
                    fullWidth
                    name='name'
                    label="Name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    />

                </Grid2>

            </Grid2>
        </form>

    </Box>
  )
}

export default AdressForm
