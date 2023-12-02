const router = require('express').Router();
const usersController = require('./controller');

router.get('', usersController.index);

module.exports = router;
