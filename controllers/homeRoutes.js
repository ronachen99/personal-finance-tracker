const router = require('express').Router();
const { User, Expense, Income } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    res.render('homepage', { logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('signup');
});

// Use withAuth middleware to prevent access to route
router.get('/report', withAuth, async (req, res) => {
  try {
    // Find the logged-in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Expense }, { model: Income }]
    });

    // Serialize the data
    const user = userData.get({ plain: true });

    res.render('report', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/income', withAuth, async (req, res) => {
  try {
    // Find the logged-in user based on the session ID
    const incomeData = await Income.findAll();

    // Serialize the data
    const incomes = incomeData.map((income) => income.get({ plain: true }));

    res.render('income', {
      incomes,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/expense', withAuth, async (req, res) => {
  try {
    // Find the logged-in user based on the session ID
    const expenseData = await Expense.findAll();

    // Serialize the data
    const expenses = expenseData.map((expense) => expense.get({ plain: true }));

    res.render('expense', {
      expenses,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
