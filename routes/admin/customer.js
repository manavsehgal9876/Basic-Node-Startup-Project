const express = require('express');
var router = express.Router();
const { userAuthCheck } = require('../../app/Middleware/AuthMiddleware');
const CustomerController = require('../../app/Controllers/Admin/CustomerController');

router.get('*', userAuthCheck);
router.post('*', userAuthCheck);

router.get('/customers', CustomerController.index);

module.exports = router;
