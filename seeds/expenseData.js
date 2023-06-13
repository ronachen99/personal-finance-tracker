const { Expense } = require('../models');

const expenseData = [
  {
    expense_name: 'Groceries',
    expense_amount: 50.75,
    user_id: 1
  },
  {
    expense_name: 'Gasoline',
    expense_amount: 35.5,
    user_id: 2
  },
  {
    expense_name: 'Movie Tickets',
    expense_amount: 25.0,
    user_id: 3
  }
];

const seedExpense = () => User.bulkCreate(incomeData);
module.exports = seedExpense;
