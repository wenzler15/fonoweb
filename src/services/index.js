import axios from "axios";

const api = new axios.create({
  baseURL: "http://localhost:8000",
});

export default api;
