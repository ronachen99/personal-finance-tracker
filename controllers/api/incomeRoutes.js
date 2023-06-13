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

// Update Income by Id

router.put('/:id', withAuth, async (req, res) => {
  try {
    const incomeData = await Income.update(req.body, {
      where: {
        id: req.params.id
      }
    });

    if (!incomeData[0]) {
      res.status(404).json({ message: 'No expense found' });
      return;
    }
    res.status(200).json(incomeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete expense by Id

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const incomeData = await Income.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id
      }
    });

    if (!incomeData) {
      res.status(404).json({ message: 'No expense found with this id!' });
      return;
    }

    res.status(200).json(incomeData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
