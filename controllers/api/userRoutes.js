//Import the necessary libraries
const router = require('express').Router();
const { User } = require('../../models');

// Set up the route for user registration
router.post('/', async (req, res) => {
  try {
    // Create a new user with the User model
    const userData = await User.create(req.body);

    // Save the user ID and set logged_in to true
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Set up the route for user login
router.post('/login', async (req, res) => {
  try {
    // Find a user by their associated email from User model
    const userData = await User.findOne({ where: { email: req.body.email } });

    // If no user is found, respond with 404 error and message
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Check if the password provided matches the user's associated password
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Set up the route for user logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
