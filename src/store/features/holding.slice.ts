import { HOLDING_TABS } from "@/components/preloader/lib";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface HoldingState {
  tab: number;
}

const initialState: HoldingState = {
  tab: HOLDING_TABS.welcome,
};

export const holdingSlice = createSlice({
  name: "holding",
  initialState,
  reducers: {
    // just provide tab, in payload
    changeTab: (state, action: PayloadAction<number>) => {
      state.tab = action.payload;
    },
  },
});

export const { changeTab } = holdingSlice.actions;

export default holdingSlice.reducer;
