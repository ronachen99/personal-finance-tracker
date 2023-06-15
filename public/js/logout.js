const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  });

  if (response.ok) {
    alert('ᕙ[⎚◡⎚]ᕗ goodbye');
    document.location.replace('/');
  } else {
    alert('┐(⎚ ꞈ ⎚)┌ something went wrong');
  }
};

document.querySelector('#logout').addEventListener('click', logout);
