import { CartItem } from "../types/cartTypes";
// ...existing code...

export const sumCartItemMrpPrice = (cartItems: CartItem[]) => {

    return cartItems.reduce((acc,item)=>acc+item.mrpPrice*item.quantity,0); 


}

export const sumCartItemSellingPrice = (cartItems: CartItem[]) => {
    return cartItems.reduce((acc,item)=>acc+item.sellingPrice*item.quantity,0); 
}

