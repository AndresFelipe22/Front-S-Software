import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, IconButton, Modal, styled, Typography } from '@mui/material';
import { HomeCategory } from '../../../types/HomeTypes';
import EditIcon from '@mui/icons-material/Edit';
import UpdateHomeCategoryForm from './UpdateHomeCategoryForm';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

interface HomeCategoryTableProps {
  categories: HomeCategory[] | undefined;
}

const HomeCategoryTable: React.FC<HomeCategoryTableProps> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = React.useState<HomeCategory | undefined>();
  const [open, setOpen] = React.useState(false);

  const handleOpen = (category: HomeCategory) => () => {
    setSelectedCategory(category);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCategory(undefined);
  };

  if (!categories || categories.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <Typography variant="subtitle1">No hay categorías para mostrar.</Typography>
      </Box>
    );
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="tabla de categorías">
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Imagen</StyledTableCell>
              <StyledTableCell align="right">Categoría</StyledTableCell>
              <StyledTableCell align="right">Actualizar</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((category, index) => (
              <StyledTableRow key={category.categoryId}>
                <StyledTableCell>{index + 1}</StyledTableCell>
                <StyledTableCell>{category.id}</StyledTableCell>
                <StyledTableCell>
                  <img
                    className="w-20 rounded-md"
                    src={category.image}
                    alt={category.name || 'Categoría'}
                  />
                </StyledTableCell>
                <StyledTableCell align="right">{category.categoryId}</StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton onClick={handleOpen(category)}>
                    <EditIcon className="text-orange-400" />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-actualizar-categoria"
        aria-describedby="modal-actualizar-categoria-descripcion"
      >
        <Box sx={style}>
          <UpdateHomeCategoryForm
            category={selectedCategory}
            handleClose={handleClose}
          />
        </Box>
      </Modal>
    </>
  );
};

export default HomeCategoryTable;