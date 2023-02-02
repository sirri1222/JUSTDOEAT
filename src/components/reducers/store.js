import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userSlice from "./userSlice";

 const reducers = combineReducers({

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
  // reducer: {
  //   user: userSlice.reducer,
  // },
  reducer: presistedReducer, })

export default store;