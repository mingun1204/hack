document.addEventListener('DOMContentLoaded', function() {
  const chartDataY = [14.9172, 9.8899, 9.4383, 10.9818, 11.9028, 16.5718, 12.9816, 13.1530]; // y값 꿀벌
  const chartDataX = [0, 57, 114, 171, 228, 285, 342, 399]; // x값 년도
  const chartDataZ = [12.1, 12.6, 12.8, 13.1, 13.4, 12.8, 12.8, 13.3]; //y2값 기온
  let chartData = '';
  let chartDataz='';

  chartDataX.forEach((x, i) => {
    chartData += `${x},${chartDataY[i] * 6} `;
  });
  chartDataX.forEach((x, i) => {
    chartDataz += `${x},${chartDataZ[i] * 90 -1000} `;
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






