import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { createStore } from "react-redux";

// 장바구니 데이터 임시

// createslice로 state를 만들고 configurestore로 등록을 한다
let user = createSlice({
  name: "user",
  initialState: {
     name: "123" ,
    
    },
  reducers: {
    changeName1(state) {
      state.name = "jjj";
    },
  },
});

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "임시 데이터 1", count: 2 },
    { id: 1, name: "임시 데이터 2", count: 2 },
    { id: 2, name: "임시 데이터 3", count: 2 },
  ],
 
});

export const store = configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
export let { changeName1 } = user.actions;
