const { Expense } = require('../models');

const expenseData = [
  {
    name: 'Groceries',
    amount: 50.75,
    user_id: 1
  },
  {
    name: 'Gasoline',
    amount: 35.5,
    user_id: 2
  },
  {
    name: 'Movie Tickets',
    amount: 25.0,
    user_id: 3
  }
];

const seedExpense = () => Expense.bulkCreate(expenseData);
module.exports = seedExpense;
