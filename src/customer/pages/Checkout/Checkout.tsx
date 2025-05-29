import { Button } from '@mui/material'
import React from 'react'
import AdressCard from './AdressCard'
import { Modal, Box, } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const Checkout = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
    <div className='pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen'>

        <div className=' space-y-5 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-9'>

            <div className='col-span-2 space-y-5'>

                <div className='flex justify-between items-center'>

                    <h1 className="font-semibold">Seleccionar una direccion</h1>
                    <Button onClick={handleOpen}>
                        Agregar nueva Direccion
                    </Button>

                </div>
                <div className='text-xs font-medium space-y-5'>
                    <p>Guardar Direcciones</p>
                    <div className='space-y-3'>
                        { [1,1,1].map((item)=><AdressCard/>) }
                    </div>

                </div>
                    <div className='py-4 px-5 rounded-md border'> 
                        <Button onClick={handleOpen}>
                            Agregar nueva Direccion
                        </Button>
                    </div>

            </div>

        </div>
      
    </div>
                
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                
                
            </Box>
        </Modal>
    </>
  )
}

export default Checkout
