import { DeleteOutline } from '@mui/icons-material';
import { 
  Button, 
  FormControl, 
  IconButton,
  InputLabel, 
  MenuItem, 
  Paper, 
  Select, 
  styled, 
  Table, 
  TableBody, 
  TableCell, 
  tableCellClasses, 
  TableContainer, 
  TableHead, 
  TableRow,
  TablePagination,
  TableFooter
} from '@mui/material';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../State/Store';
import { fetchAllCoupons, deleteCoupon } from '../../../State/admin/AdminCouponSlice';

const accountStatuses = [
    { status: 'PENDING_VERIFICATION', title: 'Pending Verification', description: 'Account is created but not yet verified' },
    { status: 'ACTIVE', title: 'Active', description: 'Account is active and in good standing' },
    { status: 'SUSPENDED', title: 'Suspended', description: 'Account is temporarily suspended, possibly due to violations' },
    { status: 'DEACTIVATED', title: 'Deactivated', description: 'Account is deactivated, user may have chosen to deactivate it' },
    { status: 'BANNED', title: 'Banned', description: 'Account is permanently banned due to severe violations' },
    { status: 'CLOSED', title: 'Closed', description: 'Account is permanently closed, possibly at user request' }
];

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

const Coupon = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [status, setStatus] = useState('ACTIVE');
  const dispatch = useAppDispatch();
  const { coupons, loading, error } = useAppSelector(state => state.adminCoupon);

  useEffect(() => {
    dispatch(fetchAllCoupons());
  }, [dispatch]);

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleStatusChange = (event: any) => {
    setStatus(event.target.value);
  };

  const handleDeleteCoupon = (id: number) => {
    dispatch(deleteCoupon({ id }));
  };

  if (loading) return <div>Cargando cupones...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <>
      <div className='pb-5 w-60'>
        <FormControl color='primary' fullWidth>
          <InputLabel id="status-select-label" className='text-primary-color'>Estado de la cuenta</InputLabel>
          <Select
            id="status-select"
            value={status}
            label="Estado de la cuenta"
            onChange={handleStatusChange}
            color='primary'
            className='text-primary-color'
          >
            {accountStatuses.map((item) =>
              <MenuItem value={item.status} key={item.status}>{item.title}</MenuItem>)}
          </Select>
        </FormControl>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Código Cupón</StyledTableCell>
              <StyledTableCell>Fecha Inicio</StyledTableCell>
              <StyledTableCell>Fecha Final</StyledTableCell>
              <StyledTableCell>Orden mínima</StyledTableCell>
              <StyledTableCell>Descuento %</StyledTableCell>
              <StyledTableCell>Estado</StyledTableCell>
              <StyledTableCell align="right">Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? coupons.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : coupons
            ).map((coupon) => (
              <StyledTableRow key={coupon.id}>
                <StyledTableCell component="th" scope="row">{coupon.code}</StyledTableCell>
                <StyledTableCell>{coupon.validityStartDate}</StyledTableCell>
                <StyledTableCell>{coupon.validityEndDate}</StyledTableCell>
                <StyledTableCell>{coupon.minimumOrderValue}</StyledTableCell>
                <StyledTableCell>{coupon.discountPercentage}</StyledTableCell>
                <StyledTableCell>{coupon.active ? 'Activo' : 'Inactivo'}</StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton onClick={() => handleDeleteCoupon(coupon.id)}>
                    <DeleteOutline className='text-red-700 cursor-pointer' />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={7}
                count={coupons.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { 'aria-label': 'rows per page' },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </>
  );
};

export default Coupon;