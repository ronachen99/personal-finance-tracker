const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#expenseName').value.trim();
  const amount = document.querySelector('#expenseAmount').value.trim();

  if (name && amount) {
    const response = await fetch(`/api/expenses`, {
      method: 'POST',
      body: JSON.stringify({ name, amount }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/expense');
    } else {
      alert(`🧑🏽‍🌾 it seems there's been a little hiccup 🧑🏽‍🌾`);
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/expenses/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      document.location.replace('/expense');
    } else {
      alert('Failed to delete expense');
    }
  }
};

document
  .querySelector('.expenseForm')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.expense-list')
  .addEventListener('click', delButtonHandler);
