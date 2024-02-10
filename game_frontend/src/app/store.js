import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import shipPositionsReducer from '../features/shipPositions/shipPositionsSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    shipPositions: shipPositionsReducer,
  },
})