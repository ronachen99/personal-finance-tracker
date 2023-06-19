// Import the needed modules and connection
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create the Expense model by extending the Sequelize Model class
class Expense extends Model {}

// Initialize the Expense model
Expense.init(
  {
    // Assign the id, name, amount, date created, user id, month, and year attributes
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: () => new Date().getMonth() + 1
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: () => new Date().getFullYear()
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'expense'
  }
);

module.exports = Expense;
