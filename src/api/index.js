import axios from 'axios'

const Api = axios.create({
  baseURL: process.env.REACT_APP_REACT_PUBLIC_API_URL,
  headers: {
    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
  }
});

export default Api;