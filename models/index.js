// Import the User, Income, and Expense models
const User = require('./User');
const Income = require('./Income');
const Expense = require('./Expense');

// Define the associations between models
User.hasMany(Income, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Income.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Expense, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Expense.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Income, Expense };
