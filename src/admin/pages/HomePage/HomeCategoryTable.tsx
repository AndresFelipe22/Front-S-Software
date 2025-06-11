import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, styled } from '@mui/material';
import { Edit } from '@mui/icons-material';

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
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    }));

interface HomeCategoryTableProps {
  categories?: Array<{ name: string; image: string; categoryId: string }>;

}

export default function HomeCategoryTable({ categories }: HomeCategoryTableProps) {
  if (!categories || categories.length === 0) return <div>No hay categorías para mostrar.</div>;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No.</StyledTableCell>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Imagen</StyledTableCell>
            <StyledTableCell align="right">Categoría</StyledTableCell>
            <StyledTableCell align="right">Actualizar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((cat, idx) => (
            <StyledTableRow key={cat.categoryId}>
              <StyledTableCell component="th" scope="row">{idx + 1}</StyledTableCell>
              <StyledTableCell>{cat.categoryId}</StyledTableCell>
              <StyledTableCell><img src={cat.image} alt={cat.name} style={{width:40, height:40}} /></StyledTableCell>
              <StyledTableCell align="right">{cat.name}</StyledTableCell>
              <StyledTableCell align="right">
                <Button variant="outlined" color="primary">
                  <Edit />
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}