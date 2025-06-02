import { Button, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'
import AdressCard from './AdressCard'
import { Modal, Box, } from '@mui/material';
import AdressForm from './AdressForm';
import PricingCard from '../Cart/PricingCard';
import mercadopago from '../../../Assets/mercado.png';
import paypal from '../../../Assets/paypal.png';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const paymentGatwayList=[
    {
        value:"razorpay",
        image: mercadopago,
        label:""
    },
    {
        value:"paypal",
        image: paypal,
        label:""
    }
   
]

const Checkout = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [paymentGatway, setPaymentGatway] = React.useState("razorpay");

    const handlePaymentChange = (event:any) => {
        setPaymentGatway(event.target.value);
    };
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
                                {[1, 1, 1].map((item) => <AdressCard />)}
                            </div>

                        </div>
                        <div className='py-4 px-5 rounded-md border'>
                            <Button onClick={handleOpen}>
                                Agregar nueva Direccion
                            </Button>
                        </div>

                    </div>

                    <div>
                        <div>
                            <div className='space-y-3 border p-5 rounded-md'>
                                <h1 className='text-primary-color font-medium pb-2 
                                text-center'>Pasarela de Pago</h1>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    className='flex justify-between pr-0'
                                    onChange={handlePaymentChange}
                                    value={paymentGatway}
                                >
                                   {paymentGatwayList.map((item)=> 
                                   <FormControlLabel 
                                   className='border w-[45%] pr-2 rounded-md flex justify-center'
                                    value={item.value} 
                                    control={<Radio />} 
                                    label={
                                        <img 
                                        className={ `${item.value=="stripe"?"w-12":""} object` }
                                        src={item.image} alt={item.label}/>
                                    }
                                    />) }
                                   


                                </RadioGroup>
                            </div>
                        </div>
                        <div className='border rounded-md'>
                            
                            <PricingCard />
                            <div className='p-5'>
                                <Button
                                    fullWidth
                                    variant='contained'
                                    sx={{ py: "11px" }}>
                                    Proceder al pago
                                </Button>
                            </div>
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
                    <AdressForm />

                </Box>
            </Modal>
        </>
    )
}

export default Checkout
