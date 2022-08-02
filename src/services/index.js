import axios from "axios";

const api = new axios.create({
  baseURL: "https://fonoweb.app.br",
});

export default api;
