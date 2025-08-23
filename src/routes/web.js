const express = require('express');
const { getHomepage,
    getSample,
    getABC,
    postCreateUser,
    getCreatePage
} = require('../controllers/homeController');

const router = express.Router();


router.get('/', getHomepage);

router.get('/sample', getSample);

router.get('/abc', getABC);

router.get('/create', getCreatePage);

router.post('/create-user', postCreateUser);

module.exports = router;