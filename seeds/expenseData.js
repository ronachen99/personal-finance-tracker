// Import the Expense model from the models directory
const { Expense } = require('../models');

// Defining an array of expense data objects
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

// Define the function to seed the Expense table with the expenseData array
const seedExpense = () => Expense.bulkCreate(expenseData);
module.exports = seedExpense;
