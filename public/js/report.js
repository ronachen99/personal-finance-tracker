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

document.addEventListener('DOMContentLoaded', function () {
  const canvas = document.querySelector('.financeComparison');
  if (canvas) {
    const income = parseFloat(canvas.dataset.income);
    const expense = parseFloat(canvas.dataset.expense);

    const ctx = canvas.getContext('2d');
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
