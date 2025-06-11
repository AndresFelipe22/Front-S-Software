import React, { useEffect, useState } from 'react'
import LoginForm from './LoginForm'
import { Alert, Button, Snackbar } from '@mui/material';
import RegisterForm from './RegisterForm';
import { useSelector } from 'react-redux';
import { RootState } from '../../../State/Store';


const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    const handleCloseSnackbar = () => setSnackbarOpen(false)
    const [snackbarOpen, setSnackbarOpen] = useState(false);
   const auth = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (auth.otpSent || auth.error) {
            setSnackbarOpen(true);
            console.log("store ", auth.error)
        }
    }, [auth.otpSent, auth.error])

    return (
        <div className='flex justify-center h-[90vh] items-center'>
            <div className='max-w-md h-[85vh] rounded-md border shadow-lg '>
                <img className='w-full rounded-t-md' src="/Logo software-s.png" alt="Logo Software S" style={{ maxWidth: 80, margin: '0 auto', display: 'block' }} />
                <div className='mt-8 px-10'>
                    {isLogin ? <LoginForm /> : <RegisterForm />}
                    <div className='flex flex-col items-center gap-1 justify-center mt-5'>
                        <p>{isLogin && "Don't"}Aún no tienes una cuenta?</p>
                        <Button size='small' onClick={() => setIsLogin(!isLogin)}>
                            {isLogin ? "Crear cuenta" : "Iniciar sesión"}
                        </Button>
                    </div>
                </div>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={snackbarOpen} autoHideDuration={6000}
                onClose={handleCloseSnackbar}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={auth.error ? "error" : "success"}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {auth.error ? auth.error : " otp sent to your email!"}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default Auth