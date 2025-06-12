import React from 'react';
import { Box, Typography } from '@mui/material';
import { useAppSelector } from '../../../State/Store';
import HomeCategoryTable from './HomeCategoryTable';

const GridTable: React.FC = () => {
  const { homePage } = useAppSelector((state) => state);
  const categories = homePage.homePageData?.grid || [];

  if (categories.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <Typography variant="subtitle1">No hay categorías en la grilla disponibles</Typography>
      </Box>
    );
  }

  const formattedCategories = categories.map(cat => ({
    id: cat.id,
    categoryId: cat.categoryId || '',
    name: cat.name || '',
    image: cat.image || ''
  }));

  return (
    <Box>
      <HomeCategoryTable categories={formattedCategories} />
    </Box>
  );
};

export default GridTable;