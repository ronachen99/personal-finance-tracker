// Handle the form submission for creating a new income
const newFormHandler = async (event) => {
  event.preventDefault();

  // Get the values from the income form inputs
  const name = document.querySelector('#incomeName').value.trim();
  const amount = document.querySelector('#incomeAmount').value.trim();

  if (name && amount) {
    // Send a POST request to the server to create a new income
    const response = await fetch(`/api/incomes`, {
      method: 'POST',
      body: JSON.stringify({ name, amount }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/income');
    } else {
      alert('Failed to create income');
    }
  }
};

// Handle the click event for the delete button of an income
const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    // Send a DELETE request to the server to delete the specified income
    const response = await fetch(`/api/incomes/${id}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      document.location.replace('/income');
    } else {
      alert(`🧑🏽‍🌾 it seems there's been a little hiccup 🧑🏽‍🌾`);
    }
  }
};

// Add event listeners to the form submission and list delete button
document
  .querySelector('.incomeForm')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.income-list')
  .addEventListener('click', delButtonHandler);
