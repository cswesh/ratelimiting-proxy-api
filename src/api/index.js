const express = require('express');
const marsweather = require('./marsweather');
const emojis = require('./emojis');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);
router.use('/mars-weather', marsweather);

module.exports = router;
