const logout = async () => {
  const logoutModal = document.getElementById('logoutModal');

  // Display the logout modal
  logoutModal.classList.add('is-active');

  const successNotification = document.createElement('div');
  successNotification.className = 'notification is-dark';
  successNotification.innerHTML = `🤠 safe travels, partner 🤠`;

  // Get the notification container within the modal
  const notificationContainer = logoutModal;

  // Append the success notification to the container
  notificationContainer.appendChild(successNotification);

  // Wait for 1750 milliseconds before performing the logout action
  await new Promise((resolve) => setTimeout(resolve, 1750));

  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
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
};

document.querySelector('#logout').addEventListener('click', logout);
