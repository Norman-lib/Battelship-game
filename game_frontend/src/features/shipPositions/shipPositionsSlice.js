import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0, 
    // {
    //     // ship1: {position: 0, isHorizontal: true},
    //     // ship2: {position: 0, isHorizontal: true},
    //     // ship3: {position: 0, isHorizontal: true},
    //     // ship4: {position: 0, isHorizontal: true},
    //     // ship5: {position: 0, isHorizontal: true},

    // },
};

export const shipPositionsSlice = createSlice({
    name: 'shipPositions',
    initialState,
    reducers: {
        setShipPositions: (state, action) => {
        state.value = action.payload;
        },
    },
    });

export const  { setShipPositions } = shipPositionsSlice.actions;

export default shipPositionsSlice.reducer;