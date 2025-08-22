const express = require('express');
const { getHomepage } = require('../controllers/homeController');
const {getSample} = require('../controllers/homeController');
const {getABC} = require('../controllers/homeController');
const router = express.Router();

router.get('/', getHomepage);

router.get('/sample', getSample);

router.get('/abc', getABC);

module.exports = router;