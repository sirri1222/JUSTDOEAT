import { configureStore } from "@reduxjs/toolkit";
// localStorage 저장 라이브러리
// import storage from "redux-persist/lib/storage";
import storageSession from "redux-persist/lib/storage/session";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import cateSlice from "./cateSliced";
import userSlice from "./userSlice";
import counterSlice from "./counterSlice";
import orderSlice from "./orderSlice";

const reducers = combineReducers({
  counter: counterSlice.reducer,
  order: orderSlice.reducer,
  cate: cateSlice.reducer,
  user: userSlice.reducer,
});

const persistConfig = {
  key: "root",
  // storage,
  storage: storageSession,
  whitelist: ["user"],
};
const presistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: presistedReducer,
  // 임시로 middleware 체크 기능 제거
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export default store;
