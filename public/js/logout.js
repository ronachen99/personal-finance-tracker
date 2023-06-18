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

  // Send a POST request to the server to log out the user
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    // If the logout is successful, redirect the user to the home page
    document.location.replace('/');
  } else {
    // If there is an error with the logout, display an error notification
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
};

// Add an event listener to the logout button
document.querySelector('#logout').addEventListener('click', logout);
