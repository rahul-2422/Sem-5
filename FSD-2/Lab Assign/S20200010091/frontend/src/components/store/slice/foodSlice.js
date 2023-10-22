import { createSlice } from "@reduxjs/toolkit";

const foodSlice = createSlice({
    name: "food",
    initialState: {
        foods: [],
        loading: false,
        error: null,
    },
    reducers: {
        getAllfoodreq(state, action) {
            state.loading = true;
            state.error = null;
        },
        getAllfoodsuccess(state, action) {
            state.loading = false;
            state.foods = action.payload;
        },
        getAllfoodfail(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const foodActions = foodSlice.actions;
export default foodSlice;
