const logout = async () => {
  const logoutModal = document.getElementById('logoutModal');

  // Display the logout modal
  logoutModal.classList.add('is-active');

  const successNotification = document.createElement('div');
  successNotification.className = 'notification is-success';
  successNotification.innerHTML = `
    🤠 safe travels 🤠
  `;

  // Get the notification container within the modal
  const notificationContainer = logoutModal;

  // Append the success notification to the container
  notificationContainer.appendChild(successNotification);

  // Wait for 2000 milliseconds (2 seconds) before performing the logout action
  await new Promise(resolve => setTimeout(resolve, 1750));

  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert('┐(⎚ ꞈ ⎚)┌ something went wrong');
  }
};

document.querySelector('#logout').addEventListener('click', logout);
