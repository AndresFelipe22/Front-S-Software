import { Button, CircularProgress, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { useAppDispatch } from '../../../State/Store';
import { sendLoginSignupOtp } from '../../../State/AuthSlice';

const RegisterForm = () => {
    const [otpSent, setOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [timer, setTimer] = useState<number>(30); // Timer state
    const [isTimerActive, setIsTimerActive] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: {
            email: '',
            otp: '',
            fullName: ''
        },
        onSubmit: async (values: any) => {
            setLoading(true);
            // TODO: implement signup logic here
            setLoading(false);
        }
    });

    const handleResendOTP = () => {
        dispatch(sendLoginSignupOtp({ email: formik.values.email }))
        setTimer(30);
        setIsTimerActive(true);
    };

    const handleSendOtp = () => {
        setOtpSent(true);
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
            <h1 className='text-center font-bold text-xl text-primary-color pb-5'>Signup</h1>
            <form className="space-y-5" onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    name="email"
                    label="Enter Your Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email ? formik.errors.email as string : undefined}
                />
                {otpSent && <div className="space-y-5">
                    <TextField
                        fullWidth
                        name="fullName"
                        label="Full Name"
                        value={formik.values.fullName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                        helperText={formik.touched.fullName ? formik.errors.fullName as string : undefined}
                    />
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
                    <p className="text-xs space-x-2">
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
                </div>}
                {otpSent && <Button
                    disabled={loading}
                    type="submit"
                    fullWidth
                    variant='contained'
                    sx={{ py: "11px" }}>
                    {loading ? <CircularProgress size="small" sx={{ width: "27px", height: "27px" }} /> : "Signup"}
                </Button>}
                {!otpSent && <Button
                    fullWidth
                    variant='contained'
                    onClick={handleSendOtp}
                    disabled={loading}
                    sx={{ py: "11px" }}>
                    {loading ? <CircularProgress size="small" sx={{ width: "27px", height: "27px" }} /> : "Send OTP"}
                </Button>}
            </form>
        </div>
    )
}

export default RegisterForm