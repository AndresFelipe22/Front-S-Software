import * as React from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { fetchSellers, updateSellerAccountStatus } from '../../../State/seller/sellerSlice';
import { Seller } from '../../../types/sellerTypes';

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

interface AccountStatus {
  status: string;
  title: string;
  description: string;
}

const accountStatuses: AccountStatus[] = [
  { status: 'PENDING_VERIFICATION', title: 'Pendiente de Verificación', description: 'La cuenta está creada pero no verificada' },
  { status: 'ACTIVE', title: 'Activa', description: 'La cuenta está activa y en buen estado' },
  { status: 'SUSPENDED', title: 'Suspendida', description: 'La cuenta está temporalmente suspendida' },
  { status: 'DEACTIVATED', title: 'Desactivada', description: 'La cuenta ha sido desactivada' },
  { status: 'BANNED', title: 'Bloqueada', description: 'La cuenta está permanentemente bloqueada' },
  { status: 'CLOSED', title: 'Cerrada', description: 'La cuenta está cerrada permanentemente' }
];

const SellersTable: React.FC = () => {
  const [accountStatus, setAccountStatus] = React.useState("ACTIVE");
  const [anchorEl, setAnchorEl] = React.useState<{ [key: number]: HTMLElement | null }>({});
  const { sellers, loading, error } = useAppSelector(state => state.seller);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchSellers(accountStatus));
  }, [accountStatus, dispatch]);

  const handleAccountStatusChange = (event: SelectChangeEvent<string>) => {
    setAccountStatus(event.target.value);
  };

  const handleUpdateSellerAccountStatus = (id: number, status: string) => {
    dispatch(updateSellerAccountStatus({ id, status }));
    handleClose(id);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, sellerId: number) => {
    setAnchorEl(prev => ({ ...prev, [sellerId]: event.currentTarget }));
  };

  const handleClose = (sellerId: number) => {
    setAnchorEl(prev => ({ ...prev, [sellerId]: null }));
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <Typography>Cargando...</Typography>
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <Typography color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Box className='pb-5 w-60'>
        <FormControl fullWidth>
          <InputLabel>Estado de la Cuenta</InputLabel>
          <Select
            value={accountStatus}
            onChange={handleAccountStatusChange}
            label="Estado de la Cuenta"
          >
            {accountStatuses.map((status) => (
              <MenuItem key={status.status} value={status.status}>
                {status.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell>ID</StyledTableCell>
              <StyledTableCell>Nombre</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Estado</StyledTableCell>
              <StyledTableCell>Negocio</StyledTableCell>
              <StyledTableCell>Acciones</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sellers.map((seller: Seller) => (
              <StyledTableRow key={seller.id}>
                <StyledTableCell>{seller.id}</StyledTableCell>
                <StyledTableCell>{seller.sellerName}</StyledTableCell>
                <StyledTableCell>{seller.email}</StyledTableCell>
                <StyledTableCell>{seller.accountStatus}</StyledTableCell>
                <StyledTableCell>{seller.businessDetails?.businessName}</StyledTableCell>
                <StyledTableCell>
                  <Button
                    onClick={(e) => seller.id && handleClick(e, seller.id)}
                    variant="outlined"
                    color="primary"
                  >
                    Cambiar Estado
                  </Button>
                  <Menu
                    anchorEl={seller.id ? anchorEl[seller.id] : null}
                    open={Boolean(seller.id && anchorEl[seller.id])}
                    onClose={() => seller.id && handleClose(seller.id)}
                  >
                    {accountStatuses.map((status) => (
                      <MenuItem
                        key={status.status}
                        onClick={() => seller.id && handleUpdateSellerAccountStatus(seller.id, status.status)}
                        disabled={seller.accountStatus === status.status}
                      >
                        <Box>
                          <Typography variant="body1">{status.title}</Typography>
                          <Typography variant="caption" color="textSecondary">
                            {status.description}
                          </Typography>
                        </Box>
                      </MenuItem>
                    ))}
                  </Menu>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default SellersTable;