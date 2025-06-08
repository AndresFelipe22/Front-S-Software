//Errores por que todavia no se han agregado estos archivos
// Remover cuando se agreguen
import { Product } from "./ProductTypes";
import { User } from "./userTypes";

export interface CartItem {
    id: number;
    cart?: Cart;
    product: Product;
    size: string;
    quantity: number;
    mrpPrice: number;
    sellingPrice: number;
    userId: number;
}


export interface Cart {
    id: number;
    user: User;
    carItems: CartItem[];
    totalSellingPrice: number;
    totalItem: number;
    totalMrpPrice: number;
    discount: number;
    couponCode: string | null;
  }