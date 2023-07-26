document.addEventListener('DOMContentLoaded', function() {
  const chartDataY = [80, 75, 62, 85, 55, 90, 78, 20, 74, 66, 80];
  const chartDataX = [0, 57, 114, 171, 228, 285, 342, 399, 456, 490, 518];
  const chartDataZ = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500];
  let chartData = '';
  let chartDataz='';

  chartDataX.forEach((x, i) => {
    chartData += `${x},${chartDataY[i] * 2} `;
  });
  chartDataZ.forEach((x, i) => {
    chartDataz += `${x},${chartDataY[i] * 2} `;
  });

  chartData = chartData.trim();
  chartDataz = chartDataz.trim();
  const polylineElement = document.querySelector('.polyline1');
  const polylineElement2 = document.querySelector('.polyline2');
  if (polylineElement !=null) {
    polylineElement.setAttribute('points', chartData);
    polylineElement2.setAttribute('points', chartDataz);
    console.log("!!!!")
  } else {
    console.error('polyline element not found.');
  }
  
});






