import axios from "axios";
import { LOGIN_USER } from "../../components/_action/types";
import instance from "../../api/axios";
export function loginUser(dataToSubmit) {
  const request = instance
    .post("http://192.168.0.156:9988/member/list?page=0", dataToSubmit)
    .then((response) =>response.dataToSubmit
    
      ); 

  return {
    type: LOGIN_USER,
    payload: request,
  };
}
