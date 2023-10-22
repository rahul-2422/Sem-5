import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "order",
    initialState: {
        allorders: [],
        loading: false,
        error: null,
    },
    reducers: {
        createOrderReq(state, action) {
            state.loading = true;
            state.error = null;
        },
        createOrderFail(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
        getAllOrderReq(state, action) {
            state.loading = true;
            state.error = null;
        },
        getAllOrderSuccess(state, action) {
            state.loading = false;
            state.orders = action.payload;
            state.error = null;
        },
        getAllOrderFail(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const orderActions = orderSlice.actions;
export default orderSlice;