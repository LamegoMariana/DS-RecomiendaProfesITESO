const router = require('express').Router();
const teachersController = require('./controller');

router.get('', teachersController.index);
router.post('', teachersController.create);
module.exports = router;
