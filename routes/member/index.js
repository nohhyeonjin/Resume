const express = require('express');
const router = express.Router();
const controller = require('./member.controller');

router.post('/auth/register', controller.register);

module.exports = router;