import { ICartProduct } from "../../types/ICartProduct";

export const cartActionTypes = {
    TOGGLE_CART_HIDDEN: "TOGGLE_CART_HIDDEN",
    ADD_ITEM: "ADD_ITEM"
}

export interface ICartState{
    hidden: boolean;
    cartItems: ICartProduct[]
    //items etc... todo
}