import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJs } from 'chart.js/auto'

function DoughnutChart() {

    const option = {
        // responsive: true,
        maintainAspectRatio: false,
    };

    const data = {
        datasets: [
            {
                data: [5, 4, 5, 6],
                backgroundColor: ['rgba(255, 179, 0, 1)', 'rgba(240, 98, 146, 1)', 'rgba(88, 134, 254, 1)', 'rgba(0, 14, 102, 1)'],
            }
        ]
    }

    return (
        <div>
            <Doughnut data={data} options  options={option} height='100px' width='100px'/>
        </div>
    )
}

export default DoughnutChart