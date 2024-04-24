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


  export function Dchart(chartdata,title,half=true){
    const options1 = {
       
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
        rotation: -90,
        circumference: 180,
        cutout: "60%",
        maintainAspectRatio: true,
        responsive: true
    };
    const options2 = {
       
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
      
      responsive: true
  };

 var options= half ? options1 : options2;

      return <Doughnut data={chartdata} options={options}/>
  }