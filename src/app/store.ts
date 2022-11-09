import { configureStore } from '@reduxjs/toolkit';
import tasksReducer  from '../redux/tasks/taskSlice';
import cartReducer from '../redux/cart/cartSlice';

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        cart: cartReducer
    }    
})