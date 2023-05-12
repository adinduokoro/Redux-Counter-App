import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 0 },
  reducers: {
    increaseCount: (state, action) => {
      if(action.payload == 0){
        state.count += 1;
      }
      state.count += action.payload
    },
    decreaseCount: (state, action) => {
      if(action.payload == 0){
        state.count -= 1;
      }
      state.count -= action.payload
    },
  },
});

export default counterSlice.reducer;
export const { increaseCount, decreaseCount } = counterSlice.actions;
