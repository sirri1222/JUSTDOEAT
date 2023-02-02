import { configureStore } from "@reduxjs/toolkit";
import cateSlice from "./cateSliced";
import userSlice from "./userSlice";
import counterSlice from "./counterSlice";
import orderSlice from "./orderSlice";
// localStorage 저장 라이브러리
// import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  // storage,
  storage: storageSession,
  whitelist: ["user"],
};
// const presistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  // reducers 가 아니고, reducer 입니다.
  reducer: {
    counter: counterSlice.reducer,
    order: orderSlice.reducer,
    cate: cateSlice.reducer,
    user: userSlice.reducer,
    // 임시로 middleware 체크 기능 제거
    // middleware: (getDefaultMiddleware) => {
    //   return getDefaultMiddleware({
    //     serializableCheck: false,
    //   });
    // },
    // presistedReducer,
  },
});

export default store;
