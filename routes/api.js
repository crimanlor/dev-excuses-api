const express = require('express');
const router = express.Router();
const apiControllers = require('../controllers/api');

router.get('/excuse', apiControllers.getExcuse)

module.exports = router; 