// Load the data for the donut chart
const chartData = {
  labels: ["Affected (1-9%)", "Destroyed (>50%)", "Major (26-50%)", "Minor (10-25%)", "No Damage"],
  datasets: [{
      data: [792, 6699, 74, 162, 4212], // Real data
      backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#ffa500", "#4bc0c0"],
      borderWidth: 1
  }]
};

// Chart configuration
const ctx = document.getElementById('multiDonutChart').getContext('2d');
new Chart(ctx, {
  type: 'doughnut',
  data: chartData,
  options: {
      responsive: true,
      maintainAspectRatio: true,
      animation: {
          duration: 500,
      },
      legend: {
          display: true,
          position: 'top',
          labels: {
              fontColor: '#333',
              fontSize: 14
          }
      },
      tooltips: {
          callbacks: {
              label: function(tooltipItem, data) {
                  const value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                  const label = data.labels[tooltipItem.index];
                  return `${label}: ${value} buildings`;
              }
          }
      },
      layout: {
          padding: 20
      }
  }
});
