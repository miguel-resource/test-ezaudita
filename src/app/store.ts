import { configureStore } from '@reduxjs/toolkit';
import tasksReducer  from '../redux/tasks/taskSlice';

export const store = configureStore({
    reducer: {
        tasks: tasksReducer
    }    
})