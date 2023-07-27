// Sample data for the lines (replace this with your data)
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Line 1',
      data: [10, 25, 15, 30, 22, 35, 40],
      borderColor: '#6391F4',
      backgroundColor: '#6391F4',
      hoverBackgroundColor: 'rgba(0, 0, 255, 0.4)',
      borderWidth: 2,
    },
    {
      label: 'Line 2',
      data: [5, 20, 10, 25, 18, 30, 35],
      borderColor: '#213864',
      backgroundColor: '#213864',
      hoverBackgroundColor: 'rgba(0, 128, 0, 0.4)',
      borderWidth: 2,
    }
  ]
};

// Chart configuration
const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top',
        labels: {
          usePointStyle: true, // To make the legend use circle markers instead of the default square markers
        },
      },
      tooltip: {
        enabled: false, // Disable the default tooltip
        external: customTooltip, // Use the custom tooltip function
      }
    },
    scales: {
      x: {
        display: true,
        title: {
          display: false,
          text: 'Months',
        }
      },
      y: {
        display: true,
        title: {
          display: false,
          text: 'Values',
        },
        ticks: {
          // Customize the line height here
          lineHeight: 0.5, // Adjust this value as needed (default is 1.2)
        },
      }
    }
  }
};

// Create the chart
const myChart = new Chart(document.getElementById('graph').getContext('2d'), config);

// Custom tooltip function
function customTooltip(context) {
  // Tooltip Element
  const tooltipEl = document.getElementById('custom-tooltip');

  // Create tooltip if it doesn't exist
  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.id = 'custom-tooltip';
    tooltipEl.classList.add('custom-tooltip');
    document.body.appendChild(tooltipEl);
  }

  // Hide tooltip if no tooltip item
  if (context.opacity === 0) {
    tooltipEl.style.display = 'none';
    return;
  }

  // Set tooltip style and content
  tooltipEl.style.display = 'block';
  tooltipEl.style.position = 'absolute';
  tooltipEl.style.background = 'rgba(0, 0, 0, 0.7)';
  tooltipEl.style.color = 'white';
  tooltipEl.style.borderRadius = '4px';
  tooltipEl.style.padding = '6px';
  tooltipEl.style.left = `${context.caretX}px`;
  tooltipEl.style.top = `${context.caretY}px`;
  
  // Customize tooltip content
  const dataPointIndex = context.dataIndex;
  const datasetIndex = context.datasetIndex;
  const label = data.labels[dataPointIndex];
  const value = data.datasets[datasetIndex].data[dataPointIndex];
  const tooltipText = `<b>${label}</b><br>Data: ${value}<br>Total bots: ${value + 4.5}%`;

  tooltipEl.innerHTML = tooltipText;
}

// Function to update the graph based on the selected timeframe
function updateGraph(timeframe) {
  // Sample data for different timeframes (replace this with your data)
  const newData = {
    daily: { labels: ['Day 1', 'Day 2', 'Day 3'], datasets: [ /*...*/ ] },
    weekly: { labels: ['Week 1', 'Week 2', 'Week 3'], datasets: [ /*...*/ ] },
    monthly: { labels: ['Month 1', 'Month 2', 'Month 3'], datasets: [ /*...*/ ] }
  };

  // Update the chart data
  myChart.data = newData[timeframe];
  myChart.update();
}

// Event listener for the timeframe dropdown
document.getElementById('timeframe-select').addEventListener('change', (event) => {
  const selectedTimeframe = event.target.value;
  updateGraph(selectedTimeframe);
});
