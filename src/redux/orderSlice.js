import { createSlice } from "@reduxjs/toolkit";
const initialState = { orderGood: [] };
/*
 {
    제품명(orderName)  :~~~, 
    옵션 (orderOption)     :[{옵션명:~~, 옵션가격:~~},{옵션명:~~, 옵션가격:~~}],
    총가격(orderMoney): ~,
    총개수(orderCount):~
}
 */
const orderSlice = createSlice({
  name: "orderSlice",
  initialState: initialState,
  reducers: {
    addOrder: (state, action) => {
      console.log("addOrder");
      console.log(action.payload);
      state.orderGood = action.payload;
    },
    deleteOrder: (state, action) => {
      console.log("deleteOrder");
      state.value = state.value - action.payload;
    },
    clearOrder: (state, action) => {
      console.log("clearOrder");
      state.value = state.value - action.payload;
    },
  },
});
export const { addOrder, deleteOrder, clearOrder } = orderSlice.actions;
export default orderSlice;
