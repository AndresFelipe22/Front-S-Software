import React from 'react'
import BecomeSeller from './BecomeSeller';
import BecomeSellerFormStep2 from './BecomeSellerFormStep2';

const steps =[
    "Tax Details & Mobile",
    "Pickup Address",
    "Bank Details",
    "Supplier Details",
];
const SellerAccountForm = () => {
    const [activeStep,setAcitivestep]=useState(0);


    const handleStep=(value:number)=>()=>{

       

         (activeStep>steps.length-1 || (activeStep>0 && value==-1) ) && setActiveStep
         (activeStep + value);
        
        activeStep == steps.leng -1 && handleCreateAccount();
        console.log("active step", activeStep)
    };
    
    const handleCreateAccount=()=>{
        console.log("create account")
    }

    const formik = userFormik ({
        initialValues: {
            mobile: "",
            otp: "",
            gstin: "",
            pickupAddress: {
                name: "",
                mobile: "",
                pincode: "",
                address: "",
                locality: "",
                city: "",
                state: "",
            },
            bankDetails : {
                accountNumber: "",
                ifscCode: "",
                accountHolderName: "",
            },
            sellerName: "",
            email: "",
            businessDetails: {
                businessName: "",
                businessEmail: "",
                businessMobile: "",
                logo: "",
                banner: "",
                businessAddress: ""
            },
            password: ""
        },
        //validationSchema: FormSchema,
        onSubmit: (values) => {
            console.log(values,"Form submitted"); 
        },
});



    return (
        <div>
            <Stepper activeStep={activeStep} alternativeLabel>


                {steps.map((label, index) => (
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <section className="mt-20 space-y-10">
                <div>
                    {activeStep==0?<BecomeSellerFormStep1 formik ={formik}/>:
                    activeStep==1?<BecomeSellerFormStep2 formik ={formik}/>:
                    activeStep==1?<BecomeSellerFormStep3 formik ={formik}/>:
                    <BecomeSellerFormStep4 formik ={formik}/>}
                    
                </div>
                
            
                 <div className='flex items-center justify-between'>
                <Button 
                onClick={handleStep(-1)} 
                variant='contained' 
                disabled={activeStep == 0}>
Back
                </Button>
                <Button onClick={handleStep(1)} variant='contained'>
             {activeStep==(steps.length-1)?"Create Account":"Continue"}
Continue
                </Button>
            </div>
            </section>
            
        </div>
    )
}
export default SellerAccountForm