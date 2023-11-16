const router = require('express').Router();
const subjectsController = require('./controller');

router.get('', subjectsController.index);

module.exports = router;
