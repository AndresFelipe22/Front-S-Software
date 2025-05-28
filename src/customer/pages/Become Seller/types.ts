// Tipos compartidos para el formulario de registro de vendedor

export interface PickupAddress {
  name: string;
  mobile: string;
  pincode: string;
  address: string;
  locality: string;
  city: string;
  state: string;
}

export interface BankDetails {
  accountNumber: string;
  ifscCode: string;
  accountHolderName: string;
}

export interface BusinessDetails {
  businessName: string;
  businessEmail: string;
  businessMobile: string;
  logo: string;
  banner: string;
  businessAddress: string;
}

export interface FormValues {
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
