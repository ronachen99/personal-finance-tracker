const { Income } = require('../models');

const incomeData = [
  {
    income_name: 'salary',
    income_amount: 100000,
    user_id: 1
  },
  {
    income_name: 'side hustle',
    income_amount: 30000,
    user_id: 2
  },
  {
    income_name: 'incentive',
    income_amount: 2000,
    user_id: 3
  }
];

const seedIncome = () => User.bulkCreate(incomeData);
module.exports = seedIncome;
