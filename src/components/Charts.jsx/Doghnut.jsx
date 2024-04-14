import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  );
  import { Doughnut } from 'react-chartjs-2';


  export function Dchart(chartdata,title){
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: 'white', // Change legend label color
            },
          },
          title: {
            display: true,
            text: title,
            color:'white',
          },
        },
      };

      return <Doughnut data={chartdata} options={options}/>
  }