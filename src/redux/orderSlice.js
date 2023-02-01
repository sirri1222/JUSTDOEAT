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
      // console.log("addOrder", action.payload);
      state.orderGood = [...state.orderGood, action.payload];
      // state.orderGood = action.payload;
      // console.log("state.orderGood", state.orderGood);
    },
    deleteOrder: (state, action) => {
      // console.log("deleteOrder", action.payload);
      const copyArr = [...state.orderGood];
      state.orderGood = copyArr.filter(
        (item) => item.orderName !== action.payload.orderName
      );
    },
    clearOrder: (state, action) => {
      // console.log("clearOrder");
      state.orderGood = [];
    },
  },
});
export const { addOrder, deleteOrder, clearOrder } = orderSlice.actions;
export default orderSlice;
