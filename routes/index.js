const express = require('express');
const router = express.Router();

const member = require('./member/index')
//const resume = require('./resume/index')
//const search = require('./search/index')

router.use('/member',member);
//router.use('/resume',resume);
//router.use('/search',search);

module.exports = router;