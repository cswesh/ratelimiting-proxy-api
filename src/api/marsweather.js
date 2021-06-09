const { default: axios } = require('axios');
const express = require('express');

const router = express.Router();

const BASE_URL = 'https://api.nasa.gov/insight_weather/?';

let cachedData;
let cacheTime;
router.get('/', async (req, res) => {
  //in memory cache
    if(cacheTime && cacheTime > Date.now() - 30 * 1000){
      return res.json(cachedTime);
  }
    try {
      
    const params = new URLSearchParams({
        api_key:process.env.NASA_API_KEY,
        feedtype:'json',
        ver:'1.0'
    })
    //1. make a request to NASA API
    const {data} = await axios.get(`${BASE_URL}${params}`)
  //2. Respond to this request with data from NASA API
  cachedData = data;
  cacheTime = Date.now();
  data.cacheTime = cacheTime;
    return res.json(data)
  } catch (error) {
      next(error);
  }
    

});

module.exports = router;
