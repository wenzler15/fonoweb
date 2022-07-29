import axios from "axios";

const api = new axios.create({
  baseURL: "http://192.168.1.114:3001",
});

export default api;
