import {configureStore} from '@reduxjs/toolkit'
import foodSlice from './slice/foodSlice'
import cartSlice from './slice/cartSlice'
import orderSlice from './slice/orderSlice'
const store = configureStore({
    reducer: {
        food:foodSlice.reducer,
        cart: cartSlice.reducer,
        order:orderSlice.reducer
    }
})

export default store
