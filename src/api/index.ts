import axios from 'axios';

const api = axios.create({
  baseURL: 'https://yts.mx/api/v2/list_movies.json'
})

export default api;
