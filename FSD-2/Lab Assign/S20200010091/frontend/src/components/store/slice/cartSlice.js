import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    },
    reducers: {
        addToCart(state, action) {
            const item = action.payload;
            const itemIndex = state.cartItems.findIndex((i) => item._id === i._id);
            const isItemexists = state.cartItems.find((i) => i._id === item._id);
            let updatedCart;
            if (isItemexists) {
                updatedCart = [...state.cartItems];
                const curqty = updatedCart[itemIndex].quantity;
                updatedCart[itemIndex].quantity = curqty + item.quantity;
                updatedCart[itemIndex].price = action.payload.price;
            } else {
                updatedCart = [...state.cartItems, action.payload];
            }
            state.cartItems = updatedCart;
        },

        removeItem(state, action){
            let item = action.payload;
            let updatedCart = state.cartItems.filter((i) => i._id !== item._id);
            state.cartItems = updatedCart;
        }

    },
});
export const cartActions = cartSlice.actions;
export default cartSlice;
