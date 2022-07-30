import axios from "axios";

const api = new axios.create({
  baseURL: "http://18.215.217.253:3001",
});

export default api;
