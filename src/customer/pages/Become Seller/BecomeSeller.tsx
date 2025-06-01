// Importamos React y el hook useState para manejar el estado
import React, { useState } from 'react';

// Importamos los formularios de registro y login de vendedores
import SellerAccountForm from './SellerAccountForm';
import SellerLoginForm from './SellerLoginForm';

// Importamos el componente Button de Material UI
import { Button } from '@mui/material';

const BecomeSeller = () => {
    // Creamos un estado para saber si se está mostrando el formulario de login o de registro
    const [isLogin, setIsLogin] = useState(false);

    // Función que alterna entre login y registro
    const handleShowPage = () => {
        setIsLogin(!isLogin); // Cambia el valor entre true y false
    };

    return (
        // Contenedor principal con 3 columnas en pantallas grandes
        <div className='grid md:gap-10 grid-cols-3 min-h-screen'>
            
            {/* Sección principal donde se muestra el formulario */}
            <section className='lg:col-span-1 md:col-span-2 col-span-3 p-10 shadow-lg rounded-b-md'>    
                {/* Muestra el formulario de registro si isLogin es false, si no, muestra el login */}
                {!isLogin ? <SellerAccountForm /> : <SellerLoginForm />}

                {/* Botón para cambiar entre login y registro */}
                <div className='mt-10 space-y-2'>
                    <h1 className='text-center text-sm font-medium'>¿Ya tienes una cuenta?</h1>
                    <Button 
                        onClick={handleShowPage} // Cambia entre login y registro al hacer clic
                        fullWidth 
                        sx={{ py: "11px" }} 
                        variant='outlined'
                    >
                        {/* El texto del botón cambia según el estado */}
                        {isLogin ? "Registrarse" : "Iniciar sesión"}
                    </Button>
                </div>
            </section>   

            {/* Sección de la derecha con texto promocional (solo visible en pantallas medianas o grandes) */}
            <section className='hidden md:col-span-1 lg:col md:flex justify-center items-center'>
                <div className="lg:w-[70%] px-5 space-y-10">
                    <div className='space-y-2 font-bold text-center'>
                        <p className="text-2xl">Únete a la revolución del Marketplace</p>
                        <p className='text-lg text-primary-color'>Aumenta tus ventas hoy</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BecomeSeller;
