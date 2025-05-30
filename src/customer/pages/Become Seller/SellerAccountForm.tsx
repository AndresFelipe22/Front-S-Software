// Importaciones necesarias
import React, { useState } from 'react';
import { Stepper, Step, StepLabel, Button } from '@mui/material';
import { useFormik } from 'formik';

// Importamos los formularios por pasos
import BecomeSellerFormStep1 from './BecomeSellerFormStep1';
import BecomeSellerFormStep2 from './BecomeSellerFormStep2';
import BecomeSellerFormStep3 from './BecomeSellerFormStep3';
import BecomeSellerFormStep4 from './BecomeSellerFormStep4';

// Array con los nombres de cada paso del formulario
const steps = [
  "Tax Details & Mobile",
  "Pickup Address",
  "Bank Details",
  "Supplier Details",
];

// Interfaces para definir la estructura de los datos del formulario
interface PickupAddress {
  name: string;
  mobile: string;
  pincode: string;
  address: string;
  locality: string;
  city: string;
  state: string;
}

interface BankDetails {
  accountNumber: string;
  ifscCode: string;
  accountHolderName: string;
}

interface BusinessDetails {
  businessName: string;
  businessEmail: string;
  businessMobile: string;
  logo: string;
  banner: string;
  businessAddress: string;
}

// Interfaz principal que representa todos los datos del formulario
interface FormValues {
  mobile: string;
  otp: string;
  gstin: string;
  pickupAddress: PickupAddress;
  bankDetails: BankDetails;
  sellerName: string;
  email: string;
  businessDetails: BusinessDetails;
  password: string;
}

// Componente principal del formulario paso a paso
const SellerAccountForm = () => {
  // Estado para saber en qué paso está el usuario
  const [activeStep, setActiveStep] = useState(0);

  // Simula la creación de cuenta (se podría conectar a backend más adelante)
  const handleCreateAccount = () => {
    console.log("create account");
  };

  // Función que cambia al paso anterior o siguiente
  const handleStep = (value: number) => () => {
    if (activeStep + value >= 0 && activeStep + value < steps.length) {
      // Cambia al paso siguiente o anterior si es válido
      setActiveStep(activeStep + value);
    } else if (activeStep === steps.length - 1 && value === 1) {
      // Si estamos en el último paso y el usuario le da a "Crear cuenta"
      handleCreateAccount();
    }
    console.log("active step", activeStep);
  };

  // Inicializamos Formik con los valores iniciales y la función para enviar el formulario
  const formik = useFormik<FormValues>({
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
      bankDetails: {
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
        businessAddress: "",
      },
      password: "",
    },
    onSubmit: (values) => {
      // Aquí se manejaría el envío del formulario (por ejemplo, con una API)
      console.log(values, "Form submitted");
    },
  });

  return (
    <div>
      {/* Barra de pasos en la parte superior */}
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Sección con el contenido del formulario */}
      <section className="mt-20 space-y-10">
        <div>
          {/* Mostramos el formulario correspondiente al paso actual */}
          {activeStep === 0 ? (
            <BecomeSellerFormStep1 formik={formik} />
          ) : activeStep === 1 ? (
            <BecomeSellerFormStep2 formik={formik} />
          ) : activeStep === 2 ? (
            <BecomeSellerFormStep3 formik={formik} />
          ) : (
            <BecomeSellerFormStep4 formik={formik} />
          )}
        </div>

        {/* Botones para avanzar o retroceder */}
        <div className="flex items-center justify-between">
          <Button
            onClick={handleStep(-1)} // Retrocede un paso
            variant="contained"
            disabled={activeStep === 0} // Desactiva si estamos en el primer paso
          >
            Back
          </Button>

          <Button
            onClick={handleStep(1)} // Avanza al siguiente paso o envía el formulario
            variant="contained"
          >
            {activeStep === steps.length - 1 ? "Create Account" : "Continue"}
          </Button>
        </div>
      </section>
    </div>
  );
};

export default SellerAccountForm;
