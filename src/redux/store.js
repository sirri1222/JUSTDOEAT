import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import orderSlice from "./orderSlice";
const store = configureStore({
  // reducers 가 아니고, reducer 입니다.
  reducer: {
    counter: counterSlice.reducer,
    order: orderSlice.reducer,
  },
});

export default store;
