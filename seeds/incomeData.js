const { Income } = require('../models');

const incomeData = [
  {
    income_name: 'Salary',
    income_amount: 10000.0,
    user_id: 1
  },
  {
    income_name: 'Side Hustle',
    income_amount: 30000.0,
    user_id: 2
  },
  {
    income_name: 'Incentive',
    income_amount: 2000.0,
    user_id: 3
  }
];

const seedIncome = () => Income.bulkCreate(incomeData);
module.exports = seedIncome;
