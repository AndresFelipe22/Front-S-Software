import { Delete } from '@mui/icons-material';
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
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
  const [accountStatus, setAccountStatus] = useState('ACTIVE');
  const dispatch = useAppDispatch();
  const { coupons, loading, error } = useAppSelector(state => state.adminCoupon);

  useEffect(() => {
    dispatch(fetchAllCoupons());
  }, [dispatch]);

  const handleChange = (event: any) => {
    setAccountStatus(event.target.value);
  };

  if (loading) return <div>Cargando cupones...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <div className='pb-5 w-60'>
        <FormControl color='primary' fullWidth>
          <InputLabel id="demo-simple-select-label" className='text-primary-color'>Estado de la cuenta</InputLabel>
          <Select
            id="demo-simple-select"
            value={accountStatus}
            label="Estado de la cuenta"
            onChange={handleChange}
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
              <StyledTableCell align="right">Orden mínima</StyledTableCell>
              <StyledTableCell align="right">Descuento%</StyledTableCell>
              <StyledTableCell align="right">Estado</StyledTableCell>
              <StyledTableCell align="right">Borrar</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coupons.map((coupon) => (
              <StyledTableRow key={coupon.id}>
                <StyledTableCell component="th" scope="row">{coupon.code}</StyledTableCell>
                <StyledTableCell>{coupon.validityStartDate}</StyledTableCell>
                <StyledTableCell>{coupon.validityEndDate}</StyledTableCell>
                <StyledTableCell align="right">{coupon.minimumOrderValue}</StyledTableCell>
                <StyledTableCell align="right">{coupon.discountPercentage}</StyledTableCell>
                <StyledTableCell align="right">{coupon.active ? 'Activo' : 'Inactivo'}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button onClick={() => dispatch(deleteCoupon({ id: coupon.id }))}>
                    <Delete />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))};
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Coupon;