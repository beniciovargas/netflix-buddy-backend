const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const verifyToken = require('../middleware/verification');

router.get('/users', ctrl.users.index);
router.get('/users/:id', ctrl.users.show);
router.put('/users/:id', verifyToken, ctrl.users.update);
router.put('/users/:id/updateNext', verifyToken, ctrl.users.updateNext)
router.put('/users/:id/updateCurrent', verifyToken, ctrl.users.updateCurrent)
router.put('/users/:id/updateFaves', verifyToken, ctrl.users.updateFaves)
router.delete('/users/:id', verifyToken, ctrl.users.destroy);

router.get('/shows', verifyToken, ctrl.shows.index);
router.get('/shows/:id', verifyToken, ctrl.shows.show);
router.post('/shows', verifyToken, ctrl.shows.create);
router.delete('/shows/:id', verifyToken, ctrl.shows.destroy);

module.exports = router;