const { User } = require('../models');

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

const seedUser = () =>
  User.bulkCreate(userData, {
    individualHooks: true,
    returning: true
  });
module.exports = seedUser;
