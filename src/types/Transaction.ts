export interface Transaction {
  id: number;
  date: string;
  customer: {
    fullName: string;
    email: string;
    mobile: string;
  };
  order: {
    id: number;
    totalSellingPrice: number;
  };
}
