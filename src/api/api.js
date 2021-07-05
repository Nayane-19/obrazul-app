import axios from 'axios'

const apiAxios = axios.create({
  baseURL: "https://www.obrazul.com.br/api/recruitment/products/",
  headers: {
    accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
  }
});

export default apiAxios;