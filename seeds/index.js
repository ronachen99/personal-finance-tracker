const sequelize = require('../config/connection');

// Import data from each js file
const seedUser = require('./userData');
const seedIncome = require('./incomeData');
const seedExpense = require('./expenseData');

// Seed through terminal by using "node seeds/index.js"
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Call the seed functions to populate the tables with initial data
  await seedUser();

  await seedIncome();

  await seedExpense();

  // Exit the process once the seeding is complete
  process.exit(0);
};

// Call the seedDatabase function to initiate the seeding process
seedDatabase();
