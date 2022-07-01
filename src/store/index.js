import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0 },
  reducers: {
    incremented(state, action) {
      state.counter += 1;
    },
    decremented(state, action) {
      state.counter -= 1;
    },
    addedBy(state, action) {
      state.counter += action.payload;
    },
  },
});

export const { incremented, decremented, addedBy } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});
export default store;
