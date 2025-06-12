import React, { useEffect, useState } from 'react';
import { 
  Box, 
  Button, 
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton, 
  Modal, 
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  tableCellClasses, 
  TableContainer, 
  TableHead, 
  TableRow,
  styled
} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { Delete, Edit as EditIcon } from '@mui/icons-material';
import { deleteDeal, getAllDeals } from '../../../State/admin/DealSlice';
import UpdateDealForm from './UpdateDealForm';

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

const DealTable = () => {
  const dispatch = useAppDispatch();
  const { adminDeals: { deals, loading, error } } = useAppSelector((state) => state);
  const [selectedDealId, setSelectedDealId] = useState<number | undefined>();
  const [openModal, setOpenModal] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [dealToDelete, setDealToDelete] = useState<number | undefined>();

  useEffect(() => {
    dispatch(getAllDeals());
  }, [dispatch]);

  const handleOpenModal = (id: number) => {
    setSelectedDealId(id);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedDealId(undefined);
  };

  const handleDeleteClick = (id: number) => {
    setDealToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (dealToDelete) {
      dispatch(deleteDeal(dealToDelete));
      setDeleteDialogOpen(false);
      setDealToDelete(undefined);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setDealToDelete(undefined);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <Paper elevation={0} className="p-4 text-red-600">
          Error al cargar las ofertas: {error}
        </Paper>
      </Box>
    );
  }

  if (deals.length === 0) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
        <Paper elevation={0}>No hay ofertas para mostrar.</Paper>
      </Box>
    );
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="tabla de ofertas">
          <TableHead>
            <TableRow>
              <StyledTableCell>No.</StyledTableCell>
              <StyledTableCell>Imagen</StyledTableCell>
              <StyledTableCell>Categoría</StyledTableCell>
              <StyledTableCell>Descuento</StyledTableCell>
              <StyledTableCell align="right">Editar</StyledTableCell>
              <StyledTableCell align="right">Eliminar</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deals.map((deal, index) => (
              <StyledTableRow key={deal.id}>
                <StyledTableCell>{index + 1}</StyledTableCell>
                <StyledTableCell>
                  <img
                    className="w-20 rounded-md"
                    src={deal.category.image}
                    alt={deal.category.name}
                  />
                </StyledTableCell>
                <StyledTableCell>{deal.category.categoryId}</StyledTableCell>
                <StyledTableCell>{deal.discount}%</StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton onClick={() => handleOpenModal(deal.id!)}>
                    <EditIcon className="text-orange-400" />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton onClick={() => handleDeleteClick(deal.id!)}>
                    <Delete className="text-red-600" />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Edit Modal */}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-actualizar-oferta"
      >
        <Box sx={style}>
          {selectedDealId && (
            <UpdateDealForm handleClose={handleCloseModal} dealId={selectedDealId} />
          )}
        </Box>
      </Modal>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={handleDeleteCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"¿Eliminar oferta?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            ¿Está seguro de que desea eliminar esta oferta? Esta acción no se puede deshacer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel}>Cancelar</Button>
          <Button onClick={handleDeleteConfirm} autoFocus color="error">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DealTable;