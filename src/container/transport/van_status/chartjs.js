import React from 'react';
import { Bar } from 'react-chartjs-2';
import PropTypes from 'prop-types'; 

 

const ChartjsStackedChart = ({datasets}) => {
  // const { labels, datasets, options, height } = props; 
 
 let height = 100;
 let labels = ['pre','LKG','UKG','I',"II",'III','IV','V','VI','VII','VIII','IX','X','XI','XII'];
//  let datasets = [
//     { label: 'Kms Run',
//       data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
//       backgroundColor: 'rgb(95, 99, 242)',
//     },
//     {label: 'Fuel ',
//       data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
//       backgroundColor: 'rgb(250, 139, 12)',
//     },
//     {label: 'Service cost ',
//       data: [10, 80, 90, 40, 60, 55, 45, 35, 30, 20, 15, 20],
//       backgroundColor: 'rgb(32, 201, 151)',
//     },
//   ];

 let options = {
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        display: false,
      },
    },
    scales: {
      yAxes: [
        {
          stacked: true,
          gridLines: {
            display: false,
            color: '#e5e9f2',
          },
          ticks: {
            beginAtZero: true,
            fontSize: 10,
            fontColor: '#182b49',
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
          gridLines: {
            display: false,
          },
          barPercentage: 0.6,
          ticks: {
            beginAtZero: true,
            fontSize: 11,
            fontColor: '#182b49',
          },
        },
      ],
    },
  };
  const data = {
    datasets,
    labels,
  };
  return <Bar data={data} height={height} options={options} />;
};
// ChartjsStackedChart.propTypes = {
//   height: PropTypes.number,
//   labels: PropTypes.arrayOf(PropTypes.string),
//   datasets: PropTypes.arrayOf(PropTypes.object),
//   options: PropTypes.object,
// };
 
export { 
  ChartjsStackedChart, 
};
