const express = require('express');
const router = express.Router();
const apiControllers = require('../controllers/api');

router.get('/excuse', apiControllers.getExcuse)
router.post('/add-new-excuse', apiControllers.postNewExcuse)

module.exports = router; 