// const chartDataY = [
//     80, 75, 62, 85, 55, 90, 78, 20, 74, 66
//   ]
// const chartDataX = [
//     0, 57, 114, 171, 228, 285, 342, 399, 456, 513
// ]
// let chartData = '';
// const chartBtnAll = document.querySelectorAll('.graph_point');
// const btnClickEvt = () => {
//     chartBtnAll.forEach((chartbtn) => {
//         chartbtn.setAttribute('aria-expanded', 'false');
//     });
//     event.target.setAttribute('aria-expanded', 'true');
//   }
  
//   chartBtnAll.forEach((chartbtn, i) => {
//    chartbtn.style.bottom = `${chartDataY[i]}%`;
//    chartbtn.closest('li').querySelector('.graph_tip > strong').innerText = chartDataY[i];
//     chartData += `${chartDataX[i]}, ${chartDataY[i] * 2}`;
//     chartbtn.addEventListener('click', btnClickEvt);
//   });
  
  
  
//   if (document.getElementsByClassName("polyline1") !== null) {
//     // document.querySelector('polyline').setAttribute('points',chartData)
//     document.querySelector('polyline').setAttribute('points', chartData);
//     console.log("!")
//   } else {
//     console.log("?");
//   }
document.addEventListener('DOMContentLoaded', function() {
  const chartDataY = [80, 75, 62, 85, 55, 90, 100, 20, 74, 66];
  const chartDataX = [0, 57, 114, 171, 228, 285, 342, 399, 456, 513];
  let chartData = '';

  chartDataX.forEach((x, i) => {
    chartData += `${x},${chartDataY[i] * 2} `;
  });

  chartData = chartData.trim();
  const polylineElement = document.querySelector('.polyline1');

  if (polylineElement) {
    polylineElement.setAttribute('points', chartData);
    console.log("!!!")
  } else {
    console.error('polyline element not found.');
  }
});