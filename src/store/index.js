import  { configureStore } from '@reduxjs/toolkit';
import  counterActions, { counterReducer } from './slices/counterSlice';

const store = configureStore({
    reducer: {
        counter: counterReducer
    }
});

export { store, counterActions}