import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Formik } from 'formik';
import React from 'react';
// ...existing code...

const AddressFormSchema = Yup.object().shape({
    name: Yup.string()
        .required('Nombre es requerido')
        .min(2, 'Nombre debe tener al menos 2 caracteres'),
    mobile: Yup.string()
        .required('Movil es requerido')
        .matches(/^\d{10}$/, 'Movil debe tener 10 digitos'),
    pinCode: Yup.string()
        .required('Pin code es requerido')
        .matches(/^\d{6}$/, 'Pin code debe tener 6 digitos'),
    address: Yup.string()
        .required('Direccion es requerida')
        .min(5, 'Direccion debe tener al menos 5 caracteres'),
    city: Yup.string()
        .required('Ciudad es requerida'),
    state: Yup.string()
        .required('Estado es requerido'),
    Locality: Yup.string()
        .required('Localidad es requerida'),
})
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
        validationSchema: AddressFormSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    })
  return (
    <Box sx={{ max:"auto"}}>
        <p className='text-xl font-bold text-center pb-5'>Detalles de Contacto</p>

        <form onSubmit={formik.handleSubmit} className='space-y-5'>
            <Grid2 container spacing={3}>
                <Grid2 xs={12}>

                    <TextField
                    fullWidth
                    name='name'
                    label="Nombre"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.errors.name}
                    />

                </Grid2>

                <Grid2 xs={6}>

                    <TextField
                        fullWidth
                        name='mobile'
                        label="Movil"
                        value={formik.values.mobile}
                        onChange={formik.handleChange}
                        error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                        helperText={formik.touched.mobile && formik.errors.mobile}
                    />

                </Grid2>

                <Grid2 xs={6}>

                    <TextField
                        fullWidth
                        name='pinCode'
                        label="Pin code"
                        value={formik.values.pinCode}
                        onChange={formik.handleChange}
                        error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
                        helperText={formik.touched.pinCode && formik.errors.pinCode}
                    />

                </Grid2>

                <Grid2 xs={12}>

                        <TextField
                        fullWidth
                        name='address'
                        label="Direccion"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                        error={formik.touched.address && Boolean(formik.errors.address)}
                        helperText={formik.touched.address && formik.errors.address}
                        />

                </Grid2>

                <Grid2 xs={12}>

                    <TextField
                    fullWidth
                    name='locality'
                    label="Localidad"
                    value={formik.values.Locality}
                    onChange={formik.handleChange}
                    error={formik.touched.Locality && Boolean(formik.errors.Locality)}
                    helperText={formik.touched.Locality && formik.errors.Locality}
                    />

                </Grid2>

                <Grid2 xs={6}>

                    <TextField
                    fullWidth
                    name='city'
                    label="Ciudad"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                    />

                </Grid2>

                <Grid2 xs={6}>

                    <TextField
                    fullWidth
                    name='state'
                    label="Estado"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    error={formik.touched.state && Boolean(formik.errors.state)}
                    helperText={formik.touched.state && formik.errors.state}
                    />

                </Grid2>
                <Grid2 xs={12}>
                    <Button fullWidth type="submit" variant='contained' sx={{py:"14px"}}>
                        Guardar Direccion
                    </Button>
                </Grid2>

                


            </Grid2>
        </form>

    </Box>
  )
}

export default AdressForm
