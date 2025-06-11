import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppSelector } from '../../../State/Store'
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

export default function DealTable() {
  const { homePageData } = useAppSelector((state: any) => state.homePage)
  const deals = homePageData?.deals || [];
  if (deals.length === 0) return <div>No hay ofertas para mostrar.</div>;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>No.</StyledTableCell>
            <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell>Descuento</StyledTableCell>
            <StyledTableCell align="right">Categoría</StyledTableCell>
            <StyledTableCell align="right">Actualizar</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {deals.map((deal: any, idx: number) => (
            <StyledTableRow key={deal.category?.categoryId || idx}>
              <StyledTableCell component="th" scope="row">{idx + 1}</StyledTableCell>
              <StyledTableCell>{deal.category?.categoryId}</StyledTableCell>
              <StyledTableCell>{deal.discount}%</StyledTableCell>
              <StyledTableCell align="right">{deal.category?.name}</StyledTableCell>
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