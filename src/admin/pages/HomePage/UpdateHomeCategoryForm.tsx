import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';
import { useAppDispatch } from '../../../State/Store';
import { updateHomeCategory } from '../../../State/admin/AdminSlice';
import { HomeCategory } from '../../../types/HomeTypes';
import { mainCategory } from '../../../data/category/mainCategory';
import { peripheralsLevelTwo } from '../../../data/category/level two/peripheralsLevelTwo';
import { componentsLevelTwo } from '../../../data/category/level two/componentsLevelTwo';
import { storageLevelTwo } from '../../../data/category/level two/storageLevleTwo';
import { accessoriesLevelTwo } from '../../../data/category/level two/accessoriesLevelTwo';
import { peripheralsLevelThree } from '../../../data/category/level three/peripheralsLevelThree';
import { componentsLevelThree } from '../../../data/category/level three/componentsLevelThree';
import { storageLevelThree } from '../../../data/category/level three/storageLevelTree';
import { accessoriesLevelThree } from '../../../data/category/level three/accesoriesLevelThree';

const validationSchema = Yup.object({
  image: Yup.string().required('La URL de la imagen es requerida'),
  category: Yup.string().required('La categoría es requerida'),
  subcategory: Yup.string().required('La subcategoría es requerida'),
  subsubcategory: Yup.string().required('La subcategoría de nivel 3 es requerida'),
});

const categoryTwo: { [key: string]: any[] } = {
  peripherals: peripheralsLevelTwo,
  components: componentsLevelTwo,
  storage: storageLevelTwo,
  accessories: accessoriesLevelTwo,
};

const categoryThree: { [key: string]: any[] } = {
  peripherals: peripheralsLevelThree,
  components: componentsLevelThree,
  storage: storageLevelThree,
  accessories: accessoriesLevelThree,
};

interface UpdateHomeCategoryFormProps {
  category: HomeCategory | undefined;
  handleClose: () => void;
}

const UpdateHomeCategoryForm: React.FC<UpdateHomeCategoryFormProps> = ({
  category,
  handleClose,
}) => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      image: category?.image || '',
      category: '',
      subcategory: '',
      subsubcategory: category?.categoryId || '',
    },
    validationSchema,
    onSubmit: (values) => {
      if (category?.id) {
        dispatch(
          updateHomeCategory({
            id: category.id,
            data: {
              image: values.image,
              categoryId: values.subsubcategory,
            },
          })
        );
        handleClose();
      }
    },
  });

  const getChildCategories = (parentCategories: any[], parentCategoryId: string) => {
    return parentCategories.filter((child) => child.parentCategoryId === parentCategoryId);
  };

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ maxWidth: 500, margin: 'auto', padding: 3 }}
      className="space-y-6"
    >
      <Typography variant="h5" gutterBottom>
        Actualizar Categoría
      </Typography>

      <TextField
        fullWidth
        id="image"
        name="image"
        label="URL de la imagen"
        value={formik.values.image}
        onChange={formik.handleChange}
        error={formik.touched.image && Boolean(formik.errors.image)}
        helperText={formik.touched.image && formik.errors.image}
        margin="normal"
      />

      <FormControl
        fullWidth
        error={formik.touched.category && Boolean(formik.errors.category)}
        margin="normal"
      >
        <InputLabel>Categoría Principal</InputLabel>
        <Select
          name="category"
          value={formik.values.category}
          onChange={formik.handleChange}
          label="Categoría Principal"
        >
          {mainCategory.map((item) => (
            <MenuItem key={item.categoryId} value={item.categoryId}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
        {formik.touched.category && formik.errors.category && (
          <FormHelperText>{formik.errors.category}</FormHelperText>
        )}
      </FormControl>

      <FormControl
        fullWidth
        error={formik.touched.subcategory && Boolean(formik.errors.subcategory)}
        margin="normal"
      >
        <InputLabel>Subcategoría</InputLabel>
        <Select
          name="subcategory"
          value={formik.values.subcategory}
          onChange={formik.handleChange}
          label="Subcategoría"
          disabled={!formik.values.category}
        >
          {formik.values.category &&
            categoryTwo[formik.values.category]?.map((item) => (
              <MenuItem key={item.categoryId} value={item.categoryId}>
                {item.name}
              </MenuItem>
            ))}
        </Select>
        {formik.touched.subcategory && formik.errors.subcategory && (
          <FormHelperText>{formik.errors.subcategory}</FormHelperText>
        )}
      </FormControl>

      <FormControl
        fullWidth
        error={formik.touched.subsubcategory && Boolean(formik.errors.subsubcategory)}
        margin="normal"
      >
        <InputLabel>Subcategoría Nivel 3</InputLabel>
        <Select
          name="subsubcategory"
          value={formik.values.subsubcategory}
          onChange={formik.handleChange}
          label="Subcategoría Nivel 3"
          disabled={!formik.values.subcategory}
        >
          {formik.values.subcategory &&
            getChildCategories(
              categoryThree[formik.values.category],
              formik.values.subcategory
            ).map((item) => (
              <MenuItem key={item.categoryId} value={item.categoryId}>
                {item.name}
              </MenuItem>
            ))}
        </Select>
        {formik.touched.subsubcategory && formik.errors.subsubcategory && (
          <FormHelperText>{formik.errors.subsubcategory}</FormHelperText>
        )}
      </FormControl>

      <Button
        color="primary"
        variant="contained"
        fullWidth
        type="submit"
        sx={{ mt: 3, py: 1.5 }}
      >
        Actualizar Categoría
      </Button>
    </Box>
  );
};

export default UpdateHomeCategoryForm;