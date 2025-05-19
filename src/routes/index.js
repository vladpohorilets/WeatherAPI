const express = require('express');
const router = express.Router();

const weatherRoutes = require('./weather-routes');
const subscriptionsRoutes = require('./subscriptions-routes');
const baseURL = require('../utils/base-url');

router.use('/api', weatherRoutes);
router.use('/api', subscriptionsRoutes);

router.get('/', (req, res) => {
    res.json({
        name: 'WeatherAPI',
        version: '1.0.0',
        description: `Server is running and you can read API on ${baseURL}/docs`
    });
});

module.exports = router;