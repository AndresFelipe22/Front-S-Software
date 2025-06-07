import { Button, CircularProgress, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { useAppDispatch } from '../../../State/Store';
import { sendLoginSignupOtp, signin } from '../../../State/AuthSlice';

const LoginForm = () => {
    const dispatch = useAppDispatch();
    const auth = { otpSent: false };
    const [loading, setLoading] = useState(false);
    const [timer, setTimer] = useState<number>(30); // Timer state
    const [isTimerActive, setIsTimerActive] = useState<boolean>(false);

    const formik = useFormik({
        initialValues: {
            email: '',
            otp: ''
        },
        onSubmit: async (values: any) => {
            setLoading(true);
            await dispatch(signin(values));
            setLoading(false);
        }
    });

    const handleResendOTP = () => {
        dispatch(sendLoginSignupOtp({ email: formik.values.email }))
        setTimer(30);
        setIsTimerActive(true);
    };

    const handleSendOtp = () => {
        dispatch(sendLoginSignupOtp({ email: formik.values.email }))
        setTimer(30);
        setIsTimerActive(true);
    };

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;
        if (isTimerActive) {
            interval = setInterval(() => {
                setTimer(prev => {
                    if (prev === 1) {
                        clearInterval(interval);
                        setIsTimerActive(false);
                        return 30; // Reset timer for next OTP request
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
                {auth.otpSent && (
                    <div className="space-y-2">
                        <p className="font-medium text-sm">
                            * Enter OTP sent to your email
                        </p>
                        <TextField
                            fullWidth
                            name="otp"
                            label="Otp"
                            value={formik.values.otp}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.otp && Boolean(formik.errors.otp)}
                            helperText={formik.touched.otp ? formik.errors.otp as string : undefined}
                        />
                    </div>
                )}
                <div>
                    {auth.otpSent ? (
                        <Button
                            type="submit"
                            fullWidth
                            variant='contained'
                            sx={{ py: "11px" }}
                            disabled={loading}
                        >
                            {loading ? <CircularProgress size={24} /> : "Login"}
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
                            {loading ? <CircularProgress size={24} /> : "send otp"}
                        </Button>
                    )}
                    <p className="text-xs space-x-2 mt-2">
                        {isTimerActive ? (
                            <span>Resend OTP in {timer} seconds</span>
                        ) : (
                            <>
                                Didn’t receive OTP?{" "}
                                <span
                                    onClick={handleResendOTP}
                                    className="text-teal-600 cursor-pointer hover:text-teal-800 font-semibold"
                                >
                                    Resend OTP
                                </span>
                            </>
                        )}
                    </p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm