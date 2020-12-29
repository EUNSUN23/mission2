import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-mission-caab8-default-rtdb.firebaseio.com/",
});

export default instance;
