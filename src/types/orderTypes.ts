export interface ShippingAddress {
  name: string;
  address: string;
  city: string;
  state: string;
  pinCode: string;
  mobile: string;
}

export interface Product {
  id: number;
  title: string;
  sellingPrice: number;
  color: string;
  images: string[];
}

export interface OrderItem {
  id: number;
  product: Product;
  size: string;
}

export type OrderStatus = 'PENDING' | 'CONFIRMED' | 'PLACED' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';

export interface Order {
  id: number;
  orderItems: OrderItem[];
  shippingAddress: ShippingAddress;
  orderStatus: OrderStatus;
}
