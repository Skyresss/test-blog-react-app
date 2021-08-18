import axios from "axios";

const api = axios.create({
  baseURL: 'https://bloggy-api.herokuapp.com'
});

export default api