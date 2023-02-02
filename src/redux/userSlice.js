import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const initialState = {
  id: "",
  pwd: "",
  // accessToken:""
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    // 로그인 되면 user 스토어 업데이트,
    loginUser: (state, action) => {
      console.log("갱신", action.payload);
      state.id = action.payload.id;
      state.pwd = action.payload.pwd;
      // state.accessToken = action.payload.Grade;
    },
    // 로그아웃 하면 user 스토어 state 비우기,
    clearUser: (state, action) => {
      state.id = "";
      state.pwd = "";
    },
  },
});

// 비구조화
export const { loginUser, clearUser } = userSlice.actions;
export default userSlice;
