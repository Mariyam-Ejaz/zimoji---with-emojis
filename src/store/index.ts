import { configureStore } from "@reduxjs/toolkit";
import holdingSlice from "./features/holding.slice";
import visitorSlice from "./features/visitor.slice"; 

export const store = configureStore({
  reducer: {
    holding: holdingSlice,
    visitor: visitorSlice, 
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
