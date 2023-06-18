// Handle the form submission for creating a new expense
const newFormHandler = async (event) => {
  event.preventDefault();

  // Get the values from the expense form inputs
  const name = document.querySelector('#expenseName').value.trim();
  const amount = document.querySelector('#expenseAmount').value.trim();

  if (name && amount) {
    // Send a POST request to the server to create a new expense
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

// Handle the click event for the delete button of an expense
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    // Send a DELETE request to the server to delete the specified expense
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

// Add event listeners to the form submission and list delete button
document
  .querySelector('.expenseForm')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.expense-list')
  .addEventListener('click', delButtonHandler);
