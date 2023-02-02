import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cate: "",
};

const cateSlice = createSlice({
  name: "cate",
  initialState: initialState,
  reducers: {
    // 카테코리 업데이트
    cateUpdate: (state, action) => {
      // console.log("카테고리 Reduce 업데이트: ", action.payload);
      state.cate = action.payload.cate;
    },
  },
});

// 비구조화
export const { cateUpdate } = cateSlice.actions;
export default cateSlice;
