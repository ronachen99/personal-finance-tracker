const searchFormHandler = async (event) => {
  event.preventDefault();
  console.log('hello');
  const month = document.querySelector('#month').value.trim();
  const year = document.querySelector('#year').value.trim();
  document.location.replace(`/report/${year}/${month}`);

  if (month && year) {
  } else {
    alert('Failed to create report');
  }
};

document
  .querySelector('#report-btn')
  .addEventListener('click', searchFormHandler);
