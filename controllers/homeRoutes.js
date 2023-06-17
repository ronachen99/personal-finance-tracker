const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Expense, Income } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    if (req.session.logged_in) {
      const userData = await User.findByPk(req.session.user_id, {
        attributes: { exclude: ['password'] }
      });
      const user = userData.get({ plain: true });
      res.render('homepage', {
        logged_in: true,
        ...user
      });
    } else {
      res.render('homepage', { logged_in: false });
    }
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

//Use withAuth middleware to prevent access to route
router.get('/expense', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Expense }]
    });

    const user = userData.get({ plain: true });

    res.render('expense', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/income', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Income }]
    });

    const user = userData.get({ plain: true });

    res.render('income', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/report', withAuth, async (req, res) => {
  const { month, year } = req.query;
  if (!month || !year) {
    try {
      res.render('report', { logged_in: req.session.logged_in });
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    try {
      const incomeData = await Income.findAll({
        where: {
          user_id: req.session.user_id,
          month: req.query.month,
          year: req.query.year
        },
        attributes: {
          include: [
            [
              sequelize.literal(
                `(SELECT SUM(amount) FROM income WHERE user_id = ${req.session.user_id} AND month = '${req.query.month}' AND year = '${req.query.year}')`
              ),
              'totalIncome'
            ]
          ]
        }
      });
      const incomes = incomeData.map((income) => income.get({ plain: true }));

      const expenseData = await Expense.findAll({
        where: {
          user_id: req.session.user_id,
          month: req.query.month,
          year: req.query.year
        },
        attributes: {
          include: [
            [
              sequelize.literal(
                `(SELECT SUM(amount) FROM expense WHERE user_id = ${req.session.user_id} AND month = '${req.query.month}' AND year = '${req.query.year}')`
              ),
              'totalExpense'
            ]
          ]
        }
      });

      const expenses = expenseData.map((expense) =>
        expense.get({ plain: true })
      );

      console.log({
        incomes,
        expenses,
        logged_in: req.session.logged_in
      });

      res.render('report', {
        incomes,
        expenses,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
});

// Fallback route for when a user attempts to visit routes that don't exist
router.get('*', (req, res) => res.render('404'));

module.exports = router;
