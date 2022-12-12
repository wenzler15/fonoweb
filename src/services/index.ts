import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backend.fonoweb.app.br',
})

export { api }
