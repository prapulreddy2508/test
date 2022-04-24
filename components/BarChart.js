import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJs } from 'chart.js/auto';
import { Typography, Box, Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function BarChart() {

    const [monthly, setMonthly] = useState('');

    const option = {
        // responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                min: 1000,
                max: 5000
            }
        },
    };

    const data = {

        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Sales for 2022',
                data: [3000, 4000, 2000, 1500, 4800, 1800, 4275, 4000, 2800, 3800, 4000, 3757],
                backgroundColor: ['rgba(170, 216, 253, 1)'],
                borderRadius: 18,
            }
        ],

    }

    return (
        < >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', columnGap:'10px'}}>
                <Typography variant='h5'>Earning overview</Typography>

                <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth size='small'>
                        <InputLabel>Monthly</InputLabel>
                        <Select

                            value={monthly}
                            label="Monthly"
                            onChange={(e) => setMonthly(e.target.value)}
                        >
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Button variant='contained'>View Details</Button>
            </div>
            <div >
                <Bar data={data} options={option} height='330px'/>
            </div>
        </ >
    )
}

export default BarChart