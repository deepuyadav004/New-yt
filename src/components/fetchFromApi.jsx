const axios = require("axios");
// import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  url: BASE_URL,
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key':'f2184cb461msh682229c229f44e3p1441ebjsnb7fd757c9880',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromApi = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}, options`)

    return data;
}

