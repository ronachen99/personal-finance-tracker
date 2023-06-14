const router = require('express').Router();
const expenseRoutes = require('./expenseRoutes');
const incomeRoutes = require('./incomeRoutes');
const userRoutes = require('./userRoutes');
const reportRoutes = require('./reportRoutes');

router.use('/expenses', expenseRoutes);
router.use('/incomes', incomeRoutes);
router.use('/reports', reportRoutes);
router.use('/users', userRoutes);

module.exports = router;
