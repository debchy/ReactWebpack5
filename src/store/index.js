import { configureStore } from '@reduxjs/toolkit';
import counterActions, { counterReducer } from './slices/counterSlice';
import { actions as carFormActions, reducer as carFormReducer} from './slices/carFormSlice';
import { actions as carActions,reducer as carReducers} from './slices/carSlice';
const store = configureStore({
    reducer: {
        counter: counterReducer,
        carForm: carFormReducer,
        car: carReducers
    }
});

export { store, counterActions, carFormActions, carActions }