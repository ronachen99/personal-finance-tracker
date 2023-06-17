const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#incomeName').value.trim();
  const amount = document.querySelector('#incomeAmount').value.trim();

  if (name && amount) {
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

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

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

document
  .querySelector('.incomeForm')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.income-list')
  .addEventListener('click', delButtonHandler);
