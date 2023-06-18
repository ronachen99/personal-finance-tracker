// Import the necessary libraries
const router = require('express').Router();
const { Income } = require('../../models');
const withAuth = require('../../utils/auth');

//Create a new Income
router.post('/', withAuth, async (req, res) => {
  try {
    const newIncome = await Income.create({
      ...req.body,
      user_id: req.session.user_id
    });
    res.status(200).json(newIncome);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete income by Id
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const incomeData = await Income.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      }
    });

    // If no income is found, respond with a status of 404 and error message
    if (!incomeData) {
      res.status(404).json({ message: 'No expense found with this id!' });
      return;
    }

    //If the income is successfully deleted, respond with a 200 status code and the deleted data as JSON
    res.status(200).json(incomeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
