import React from 'react';
import { useAppSelector } from '../../../State/Store';
import HomeCategoryTable from './HomeCategoryTable';
import { Box, Typography } from '@mui/material';
import { HomeCategory } from '../../../types/HomeTypes';

interface Category {
  id: number;
  categoryId: string;
  name: string;
  image: string;
}

const DealCategoryTable: React.FC = () => {
  const { homePage } = useAppSelector((state) => state);
  const categories = homePage.homePageData?.dealCategories || [];

  if (categories.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <Typography variant="subtitle1">No hay categorías disponibles</Typography>
      </Box>
    );
  }

  // Transformar las categorías al formato esperado por HomeCategoryTable
  const formattedCategories = categories.map(cat => ({
    id: cat.id,
    categoryId: cat.categoryId || '',
    name: cat.name || '',
    image: cat.image || ''
  }));

  return (
    <Box>
      <HomeCategoryTable 
        categories={formattedCategories} 
      />
    </Box>
  );
};

export default DealCategoryTable;