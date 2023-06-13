const sequelize = require('../config/connection');

// Import data from each js file
const seedUser = require('./userData');
const seedIncome = require('./incomeData');
const seedExpense = require('./expenseData');

// Seed through terminal by using "node seeds/index.js"
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedIncome();

  await seedExpense();

  process.exit(0);
};

seedDatabase();
