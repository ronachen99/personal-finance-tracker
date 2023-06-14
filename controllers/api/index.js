const router = require('express').Router();

const expenseRoutes = require('./expenseRoutes');
const incomeRoutes = require('./incomeRoutes');
const userRoutes = require('./userRoutes');

router.use('/expenses', expenseRoutes);
router.use('/incomes', incomeRoutes);
router.use('/users', userRoutes);

module.exports = router;
