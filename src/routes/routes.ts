const express = require('express');

const weatherController = require('../controllers/weather-controller');
const router = express.Router();

router.get('/forecast/:city', weatherController.getWeather);

module.exports = router;
