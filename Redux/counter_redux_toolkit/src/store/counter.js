import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counterVal: 0 },
    reducers: {
        increment: (state) => {
            state.counterVal += 1;
        },
        decrement: (state) => {
            state.counterVal -= 1;
        },
        addition: (state, action) => {
            state.counterVal += parseInt(action.payload);
        },
        subtraction: (state, action) => {
            state.counterVal -= parseInt(action.payload);
        },
    },
});

export const counterActions = counterSlice.actions;
export default counterSlice;