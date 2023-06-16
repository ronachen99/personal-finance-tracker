document.querySelector('.login-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      const successNotification = document.createElement('div');
      successNotification.className = 'notification is-success';
      successNotification.innerHTML = `
      🤠 Welcome back partner! 🤠
      `;

      const notificationContainer = document.querySelector('.notification-container');
      notificationContainer.appendChild(successNotification);

      setTimeout(function() {
        successNotification.classList.add('fade-out');
        setTimeout(function() {
          document.location.replace('/');
        }, 800);
      }, 800);

      successNotification.addEventListener('animationend', function() {
        successNotification.parentNode.removeChild(successNotification);
      });
    } else {
      const errorNotification = document.createElement('div');
      errorNotification.className = 'notification is-danger';
      errorNotification.innerHTML = `
        ┐(⎚ ꞈ ⎚)┌ Something went wrong
      `;

      const notificationContainer = document.querySelector('.notification-container');
      notificationContainer.appendChild(errorNotification);

      setTimeout(function() {
        errorNotification.classList.add('fade-out');
      }, 1750);

      errorNotification.addEventListener('animationend', function() {
        errorNotification.parentNode.removeChild(errorNotification);
      });
    }
  }
});

