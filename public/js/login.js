// Add an event listener to the login form submission
document
  .querySelector('.login-form')
  .addEventListener('submit', async (event) => {
    event.preventDefault();

    // Get the values from the login form inputs
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
      // Send a POST request to the server to log in the user
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        const successNotification = document.createElement('div');
        successNotification.className = 'notification is-success';
        successNotification.innerHTML = `🤠 welcome back, partner 🤠`;

        const notificationContainer = document.querySelector(
          '.notification-container'
        );
        notificationContainer.appendChild(successNotification);

        // Add animation effects to the success notification and redirect the user
        setTimeout(function () {
          successNotification.classList.add('fade-out');
          setTimeout(function () {
            document.location.replace('/');
          }, 800);
        }, 800);

        // Remove the success notification after the animation ends
        successNotification.addEventListener('animationend', function () {
          successNotification.parentNode.removeChild(successNotification);
        });
      } else {
        // If there is an error with the login, display an error notification
        const errorNotification = document.createElement('div');
        errorNotification.className = 'notification is-danger';
        errorNotification.innerHTML = `🧑🏽‍🌾 it seems there's been a little hiccup 🧑🏽‍🌾`;

        const notificationContainer = document.querySelector(
          '.notification-container'
        );
        notificationContainer.appendChild(errorNotification);

        // Add animation effects to the error notification
        setTimeout(function () {
          errorNotification.classList.add('fade-out');
        }, 1750);

        // Remove the error notification after the animation ends
        errorNotification.addEventListener('animationend', function () {
          errorNotification.parentNode.removeChild(errorNotification);
        });
      }
    }
  });
