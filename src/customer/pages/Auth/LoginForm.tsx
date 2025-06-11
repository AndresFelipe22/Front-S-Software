import { Button, CircularProgress, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { useAppDispatch, useAppSelector } from '../../../State/Store';
import { sendLoginSignUpOtp, signin } from '../../../State/AuthSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const auth = useAppSelector(state => state.auth);
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [timer, setTimer] = useState<number>(30);
    const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            otp: ''
        },
        onSubmit: async (values: any) => {
            setLoading(true);
            await dispatch(signin({ email: values.email, otp, navigate }));
            setLoading(false);
        }
    });

    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOtp(e.target.value);
        formik.setFieldValue('otp', e.target.value);
    };

    const handleResendOTP = () => {
        dispatch(sendLoginSignUpOtp({ email: formik.values.email }));
        setTimer(30);
        setIsTimerActive(true);
    };

    const handleSendOtp = () => {
        setIsOtpSent(true);
        handleResendOTP();
    };

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;
        if (isTimerActive) {
            interval = setInterval(() => {
                setTimer(prev => {
                    if (prev === 1) {
                        clearInterval(interval);
                        setIsTimerActive(false);
                        return 30;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isTimerActive]);

    return (
        <div>
            <h1 className='text-center font-bold text-xl text-primary-color pb-8'>Login</h1>
            <form className="space-y-5" onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    name="email"
                    label="Correo electrónico"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email ? formik.errors.email as string : undefined}
                />
                {isOtpSent && (
                    <div className="space-y-2">
                        <p className="font-medium text-sm">
                            * Ingresa el OTP enviado a tu correo
                        </p>
                        <TextField
                            fullWidth
                            name="otp"
                            label="OTP"
                            value={formik.values.otp}
                            onChange={handleOtpChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.otp && Boolean(formik.errors.otp)}
                            helperText={formik.touched.otp ? formik.errors.otp as string : undefined}
                        />
                        <p className="text-xs space-x-2 mt-2">
                            {isTimerActive ? (
                                <span>Reenviar OTP en {timer} segundos</span>
                            ) : (
                                <>
                                    ¿No recibiste el OTP?{' '}
                                    <span
                                        onClick={handleResendOTP}
                                        className="text-teal-600 cursor-pointer hover:text-teal-800 font-semibold"
                                    >
                                        Reenviar OTP
                                    </span>
                                </>
                            )}
                        </p>
                    </div>
                )}
                <div>
                    {isOtpSent ? (
                        <Button
                            type="submit"
                            fullWidth
                            variant='contained'
                            sx={{ py: "11px" }}
                            disabled={loading}
                        >
                            {loading ? <CircularProgress size={24} /> : "Iniciar sesión"}
                        </Button>
                    ) : (
                        <Button
                            type="button"
                            onClick={handleSendOtp}
                            fullWidth
                            variant='contained'
                            sx={{ py: "11px" }}
                            disabled={loading}
                        >
                            {loading ? <CircularProgress size={24} /> : "Enviar OTP"}
                        </Button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default LoginForm