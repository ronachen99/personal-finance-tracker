// Import the User model from the models directory
const { User } = require('../models');

// Defining an array of user data objects
const userData = [
  {
    name: 'Sal',
    email: 'sal@hotmail.com',
    password: 'password12345'
  },
  {
    name: 'Mark',
    email: 'mark@hotmail.com',
    password: 'password12345'
  },
  {
    name: 'Kyla',
    email: 'kyla@hotmail.com',
    password: 'password12345'
  }
];

// Define a function to seed the User table with the userData array
const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
  });
module.exports = seedUser;
