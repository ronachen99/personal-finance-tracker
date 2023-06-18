// Define a function to handle the search form submission
const searchFormHandler = async (event) => {
  event.preventDefault();

  // Get the selected month and year values from the form
  const month = document.querySelector('#month').value.trim();
  const year = document.querySelector('#year').value.trim();

  if (month && year) {
    // If both month and year values are present, redirect to the report page with the selected month and year as query parameters
    document.location.replace(`/report?year=${year}&month=${month}`);
  } else {
    // If either month or year value is missing, set a status of 500 (Internal Server Error)
    res.status(500);
  }
};

// Add an event listener to the search form
document
  .querySelector('#new-report')
  .addEventListener('submit', searchFormHandler);

// Add an event listener to execute when the DOM content has loaded
document.addEventListener('DOMContentLoaded', function () {
  // Get the canvas element for the finance comparison chart
  const canvas = document.querySelector('.financeComparison');
  if (canvas) {
    // If the canvas element exists, retrieve the income and expense values from its dataset attributes
    const income = parseFloat(canvas.dataset.income);
    const expense = parseFloat(canvas.dataset.expense);

    // Get the 2D rendering context of the canvas
    const ctx = canvas.getContext('2d');

    // Create a new doughnut chart using Chart.js library
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: ['income', 'expense'],
        datasets: [
          {
            data: [income, expense],
            backgroundColor: [
              'rgba(30, 31, 34, 0.8)',
              'rgba(258, 195, 29, 0.8)'
            ]
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          position: 'bottom'
        },
        tooltips: {
          callbacks: {
            label: function (tooltipItem, data) {
              // Customize the tooltip label to display the value with locale-specific formatting
              const dataset = data.datasets[tooltipItem.datasetIndex];
              const value = dataset.data[tooltipItem.index];
              return value.toLocaleString();
            }
          }
        }
      }
    });
  }
});
