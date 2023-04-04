import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {count:0,incrementBy:0},
    reducers: {
        increment: (state, action) => {
            state.count += 1;
        },
        decrement:(state, action) => {
            state.count -= 1;
        },
        incrementBy: (state, action) => {
            state.count += state.incrementBy;;
        },
        changeAmount:(state, action) => {
            state.incrementBy = action.payload;
        }

    }
});

export default counterSlice.actions;
export const counterReducer = counterSlice.reducer;