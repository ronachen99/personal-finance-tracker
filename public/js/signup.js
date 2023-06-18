// Define a function to handle the signup form submission
const signupFormHandler = async (event) => {
  event.preventDefault();

  // Get the entered name, email, and password values from the signup form
  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    // If all required fields are filled, send a POST request to create a new user
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      // If the response is successful, display a success notification and redirect to the homepage
      const successNotification = document.createElement('div');
      successNotification.className = 'notification is-success';
      successNotification.innerHTML = `🤠 welcome aboard, partner 🤠`;

      const notificationContainer = document.querySelector(
        '.notification-container'
      );
      notificationContainer.appendChild(successNotification);

      setTimeout(function () {
        successNotification.classList.add('fade-out');
        setTimeout(function () {
          document.location.replace('/');
        }, 800);
      }, 800);

      successNotification.addEventListener('animationend', function () {
        successNotification.parentNode.removeChild(successNotification);
      });
    } else {
      // If the response is not successful, display an error notification
      const errorNotification = document.createElement('div');
      errorNotification.className = 'notification is-danger';
      errorNotification.innerHTML = `🧑🏽‍🌾 it seems there's been a little hiccup 🧑🏽‍🌾`;

      const notificationContainer = document.querySelector(
        '.notification-container'
      );
      notificationContainer.appendChild(errorNotification);

      setTimeout(function () {
        errorNotification.classList.add('fade-out');
      }, 1750);

      errorNotification.addEventListener('animationend', function () {
        errorNotification.parentNode.removeChild(errorNotification);
      });
    }
  }
};

// Add an event listener to the signup form
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
