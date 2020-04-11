const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const verifyToken = require('../middleware/verification');

router.get('/users', verifyToken, ctrl.users.index);

module.exports = router;