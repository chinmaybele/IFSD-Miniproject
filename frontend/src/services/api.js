import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  withCredentials: true // send cookies (JWT) to backend
})

export default api
