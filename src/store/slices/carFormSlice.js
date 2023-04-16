import { createSlice } from "@reduxjs/toolkit";
import { actions as carActions } from "./carSlice";
const carFormSlice = createSlice({
    name: 'carForm',
    initialState: { make: '', model:'', price:0},
    reducers: {
        changeMake: (state,action)=>{
            state.make = action.payload;
        },
        changeModel: (state,action)=>{
            state.model = action.payload;
        },
        changePrice: (state,action)=>{
            state.price = action.payload;
        }
        
    },
    extraReducers(builder){
        builder.addCase(carActions.addCar,(state,action)=>{
            state.make = '';
            state.model = "";
            state.price = 0;
        });
    }
})

export const {actions,reducer}=carFormSlice;
