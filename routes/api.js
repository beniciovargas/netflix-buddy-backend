const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const verifyToken = require('../middleware/verification');

router.get('/users', verifyToken, ctrl.users.index);
router.get('/users/:id', verifyToken, ctrl.users.show);
router.put('/users/:id', verifyToken, ctrl.users.update);
router.delete('/users/:id', verifyToken, ctrl.users.destroy);

router.get('/shows', verifyToken, ctrl.shows.index);
router.get('/shows/:id', verifyToken, ctrl.shows.show);
router.post('/shows', verifyToken, ctrl.shows.create);
router.delete('/shows/:id', verifyToken, ctrl.shows.destroy);

module.exports = router;