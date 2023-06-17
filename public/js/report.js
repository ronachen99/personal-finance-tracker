const searchFormHandler = async (event) => {
  event.preventDefault();
  const month = document.querySelector('#month').value.trim();
  const year = document.querySelector('#year').value.trim();

  if (month && year) {
    document.location.replace(`/report?year=${year}&month=${month}`);
  } else {
    res.status(500);
  }
};

document
  .querySelector('#new-report')
  .addEventListener('submit', searchFormHandler);
