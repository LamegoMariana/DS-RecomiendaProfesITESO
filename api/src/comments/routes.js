const router = require('express').Router();
const commentsController = require('./controller');

router.get('', commentsController.index);

module.exports = router;
