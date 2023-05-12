import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increaseCount: (state, action) => {
      state.count += 1;
    },
    decreaseCount: (state, action) => {
      state.count -= 1;
    },
    byAmount: (state, action) => {

    }
  },
});

export default counterSlice.reducer;
export const { increaseCount, decreaseCount , byAmount } = counterSlice.actions;
