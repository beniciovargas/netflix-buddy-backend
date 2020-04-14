const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const verifyToken = require('../middleware/verification');

router.get('/users', verifyToken, ctrl.users.index);
router.get('/users/:id', verifyToken, ctrl.users.show);
router.delete('/users/:id', verifyToken, ctrl.users.destroy);

router.get('/shows', verifyToken, ctrl.shows.index);
router.get('/shows/:id', verifyToken, ctrl.shows.show)


module.exports = router;