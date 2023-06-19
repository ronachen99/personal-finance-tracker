// Importing the required library and route modules
const router = require('express').Router();

const expenseRoutes = require('./expenseRoutes');
const incomeRoutes = require('./incomeRoutes');
const userRoutes = require('./userRoutes');

// Using the routes for endpoints
router.use('/expenses', expenseRoutes);
router.use('/incomes', incomeRoutes);
router.use('/users', userRoutes);

module.exports = router;
