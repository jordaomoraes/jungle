import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.jungledevs.com/api/v1/challenge-newsletter/',
})


export default api;