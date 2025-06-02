import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAppDispatch } from '../../../Redux Toolkit/Store';



export default function TransactionTable() {
  const dispatch = useAppDispatch();

  // TODO: Replace with real selector when integrating with real store
  // Provide a stubbed transaction array with correct type for demonstration
  const transaction = { transactions: [
    {
      id: 1,
      date: '2025-06-01T12:00:00Z',
      customer: { fullName: 'John Doe', email: 'john@example.com', mobile: '1234567890' },
      order: { id: 101, totalSellingPrice: 999 },
    }
  ] };

  React.useEffect(() => {
    // Stub dispatch call for now to avoid argument errors
    // dispatch(fetchTransactionsBySeller(localStorage.getItem("jwt") || ""));
  }, [dispatch]);



  return (
    <>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Customer Details</TableCell>
              <TableCell>Order</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transaction.transactions.map((item) => (
              <TableRow key={item.id}>
                <TableCell align="left"><div className='space-y-1'>
                  <h1 className='font-medium'>{item.date.split("T")[0]}</h1>
                  <h1 className='text-xs text-gray-600 font-semibold'>{item.date.split("T")[1]}</h1>
                  </div></TableCell>
                <TableCell component="th" scope="row">
                  <div className='space-y-2'>
                    <h1>{item.customer.fullName}</h1>
                    <h1 className='font-semibold'>{item.customer.email}</h1>
                    <h1 className='font-bold text-gray-600'>{item.customer.mobile}</h1>
                  </div>
                </TableCell>
                <TableCell>
                  Order Id : <strong> {item.order.id} </strong> 
                </TableCell>
                <TableCell
                  align="right">
                  ₹{item.order.totalSellingPrice}
                </TableCell>
                {/* <TableCell align="right">
                  <Button
                    size='small'
                    onClick={(e) => handleClick(e, item.id)}
                    color='primary'
                    className='bg-primary-color'>
                    Status
                  </Button>
                  <Menu
                    id={`status-menu ${item.id}`}
                    anchorEl={anchorEl[item.id]}
                    open={Boolean(anchorEl[item.id])}
                    onClose={() => handleClose(item.id)}
                    MenuListProps={{
                      'aria-labelledby': `status-menu ${item.id}`,
                    }}
                  >
                    {orderStatus.map((status) =>
                      <MenuItem 
                      key={status.label} 
                      onClick={() => handleUpdateOrder(item.id, status.label)}>
                        {status.label}</MenuItem>
                    )}
                  </Menu>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}