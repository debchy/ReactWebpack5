import { createSlice, nanoid} from '@reduxjs/toolkit';

const carSlice = createSlice({
    name: 'car',
    initialState:{
        data:[],
        searchTerm: ''
    },
    reducers: {
        addCar:(state,action)=>{
            state.data.push({
                make: action.payload.make, 
                model:action.payload.model, 
                price:action.payload.price,
                id: nanoid()
            });
        },
        removeCar:(state,action)=>{            
            state.data.splice(state.data.findIndex(f=>f.id === action.payload));
        },
        changeSearchTerm:(state,action)=>{
            state.searchTerm = action.payload
        }
    },
})

export const { actions, reducer} =carSlice