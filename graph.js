document.addEventListener('DOMContentLoaded', function() {
  const chartDataY = [80, 75, 62, 85, 55, 90, 78, 20, 74, 66];
  const chartDataX = [0, 57, 114, 171, 228, 285, 342, 399, 456, 513];
  let chartData = '';

  chartDataX.forEach((x, i) => {
    chartData += `${x},${chartDataY[i] * 2} `;
  });

  chartData = chartData.trim();
  const polylineElement = document.querySelector('.polyline1');

  if (polylineElement !=null) {
    polylineElement.setAttribute('points', chartData);
    console.log("!!!!")
  } else {
    console.error('polyline element not found.');
  }
});