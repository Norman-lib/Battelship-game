import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [
         {id : 0, position: 0,nbSquares :3 ,isHorizontal: true},
         {id : 1, position: 5,nbSquares:1,  isHorizontal: true},
    ]
    // {
    //     // ship1: {position: 0, isHorizontal: true},
    //     // ship3: {position: 0, isHorizontal: true},
    //     // ship4: {position: 0, isHorizontal: true},
    //     // ship5: {position: 0, isHorizontal: true},

    // },
};

export const shipPositionsSlice = createSlice({
    name: 'shipPositions',
    initialState,
    reducers: {
        updateShipPosition: (state, action) => {
            const newPosition  = action.payload.position;
            const shipIndex = action.payload.id
            if (shipIndex !== -1) {
              state.value[shipIndex].position = newPosition;
            }
          }
          
    },
    });

export const  { updateShipPosition } = shipPositionsSlice.actions;

export default shipPositionsSlice.reducer;