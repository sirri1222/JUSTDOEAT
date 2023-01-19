import axios from "axios";
const instance = axios.create({
  baseURL: "http://192.168.0.156:9988",
});
export default instance;