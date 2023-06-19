// Import the necessary libraries
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// Define the routes
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
