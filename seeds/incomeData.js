const { Income } = require('../models');

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

const seedIncome = () => Income.bulkCreate(incomeData);
module.exports = seedIncome;
