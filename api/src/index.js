const router = require('express').Router();

// Models routes
const commentsRoutes = require('./comments/routes');
const subjectsRoutes = require('./subjects/routes');
const teachersRoutes = require('./teachers/routes');
const userRoutes = require('./users/routes');

router.use('/comments', commentsRoutes);
router.use('/subjects', subjectsRoutes);
router.use('/teachers', teachersRoutes);
router.use('/users', userRoutes);

router.get('', (req, res) => {
	res.send('API works');
});

module.exports = { apiRoutes: router };
