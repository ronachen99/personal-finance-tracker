Handlebars.registerHelper('doughnutChart', function(data) {
  return `<script>
            var ctx = document.getElementById('doughnutChart').getContext('2d');
            var chart = new Chart(ctx, {
              type: 'doughnut',
              data: {
                labels: ${JSON.stringify(data.labels)},
                datasets: [{
                  data: ${JSON.stringify(data.values)},
                  backgroundColor: ${JSON.stringify(data.colors)}
                }]
              }
            });
          </script>`;
});