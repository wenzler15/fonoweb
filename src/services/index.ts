import axios from 'axios'

const api = axios.create({
  baseURL: 'http://34.196.61.152:3000',
})

export { api }
