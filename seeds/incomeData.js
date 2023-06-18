// Import the Income model from the models directory
const { Income } = require('../models');

// Defining an array of income data objects
const incomeData = [
  {
    name: 'Salary',
    amount: 10000.0,
    user_id: 1
  },
  {
    name: 'Side Hustle',
    amount: 30000.0,
    user_id: 2
  },
  {
    name: 'Incentive',
    amount: 2000.0,
    user_id: 3
  }
];

// Define the function to seed the Income table with the expenseData array
const seedIncome = () => Income.bulkCreate(incomeData);
module.exports = seedIncome;
