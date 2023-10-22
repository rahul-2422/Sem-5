import { createSlice } from '@reduxjs/toolkit'

const updateOrderSlice = createSlice({
    name: 'updateOrder',
    initialState: {
        loading: false,
        isUpdated: false,
        error: null
    },
    reducers: {
        updateOrderRequest(state) {
            state.loading = true;
        },
        updateOrderSuccess(state, action) {
            state.loading = false;
            state.isUpdated = action.payload
        },
        updateOrderfail(state, action) {
            state.loading = false;
            state.error = action.payload
        },
        updateOrderReset(state) {
            state.isUpdated = false;
        }

    }
})

export default updateOrderSlice