const router = require('express').Router();
const teachersController = require('./controller');

router.get('', teachersController.index);

module.exports = router;
