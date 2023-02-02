import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const initialState = {

  uiId: "",
  uiPwd: "",
  uiName: "",
  uiEmail: "",
  uiPhone: "",
  uiBirth: "",
  uiGen: "",
  uiGrade: "",
  // accessToken:""

}

const userSlice = createSlice({
  name:"user",
  initialState: initialState,
  reducers:{

    // 로그인 되면 user 스토어 업데이트,
    loginUser: (state, action)=>{
      console.log(action.payload)
      state.uiId =action.payload.uiId;
      state.uiPwd =action.payload.uiPwd;
      state.uiName =action.payload.uiName;
      state.uiEmail =action.payload.uiEmail;
      state.uiPhone =action.payload.uiPhone;
      state.uiBirth =action.payload.uiBirth;
      state.uiGen =action.payload.uiGen;
      state.uiGrade =action.payload.uiGrade;
      state.accessToken =action.payload.uiGrade;
 
    },
        // 로그아웃 하면 user 스토어 state 비우기,
    clearUser:(state, action)=>{
      state.uiId ="";
      state.uiPwd ="";
      state.uiName ="";
      state.uiEmail ="";
      state.uiPhone ="";
      state.uiBirth ="";
      state.uiGen ="";
      state.uiGrade ="";
    }
  }
})

// 비구조화
export const userActions = userSlice.actions;
export default userSlice;