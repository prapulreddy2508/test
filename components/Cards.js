import React from 'react';
import { Grid, Card, CardContent, Box, Typography, CardActions, Divider, Button } from '@mui/material';
import BarChart from './BarChart';
import DoughnutChart from './DoughnutChart';

function Cards() {
    return (
        <Grid container sx={{ display: 'flex', }} rowSpacing={4} columnSpacing={4} >
            <Grid item lg={3} xs={12}>
                <Card >
                    <Box p={1} >
                        <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box>
                                <Typography variant='body1'>
                                    Total earned
                                </Typography>
                                <Typography variant="h4">
                                    39,354 <Typography variant='body1' component='span' color='error'>-9%</Typography>
                                </Typography>
                            </Box>
                            <Box  >
                                <img src='/currency-illustration.svg' />
                            </Box>
                        </CardContent>
                        <CardActions>
                            <Button variant='contained'  >View Details</Button>
                        </CardActions>
                    </Box>
                </Card>
            </Grid>

            <Grid item lg={9} xs={12} >
                <Card sx={{ display: 'flex' }} >
                    <Grid container>
                        <Grid item >
                            <CardContent>

                                <Box>
                                    <img src='/people-illustartion.svg' />
                                </Box>
                                <Box>
                                    <Typography variant="h4">
                                        25 <Typography variant='body1' component='span' color='43A047'>+9%</Typography>
                                    </Typography>
                                    <Typography variant='body1'>
                                       Selected
                                    </Typography>
                                </Box>

                            </CardContent>
                        </Grid>
                    </Grid>

                    <Divider orientation="vertical" flexItem />

                    <Grid container>
                        <Grid item>

                            <CardContent>

                                <Box>
                                    <img src='/peopleshortlist-illustration.svg' />
                                </Box>
                                <Box>
                                    <Typography variant="h4">
                                        25  <Typography variant='body1' component='span' color='green'>+9%</Typography>
                                    </Typography>
                                    <Typography variant='body1'>
                                       Rescheduled
                                    </Typography> 
                                </Box>

                            </CardContent>

                        </Grid>
                    </Grid>
                    <Divider orientation="vertical" flexItem />

                    <Grid container>
                        <Grid item>
                            <CardContent>
                                <Box>
                                    <img src='/peopleengaged-illustration.svg' />
                                </Box>
                                <Box>
                                    <Typography variant="h4">
                                        25 <Typography variant='body1' component='span' color='error'>+9%</Typography>
                                    </Typography>
                                    <Typography variant='body1'>
                                      Rejected
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Grid>
                    </Grid>
                    <Divider orientation="vertical" flexItem />
                    <Grid container >
                        <Grid item>
                            <CardContent>
                                <Box>
                                    <img src='/peopletotalengagement-illustration.svg' />
                                </Box>
                                <Box>
                                    <Typography variant="h4">
                                       25  <Typography variant='body1' component='span' color='error'>+9%</Typography>
                                    </Typography>
                                    <Typography variant='body1'>
                                       No show
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Grid>
                    </Grid>
                </Card>
            </Grid>

            <Grid item lg={9} xs={12}>
                <Card >
                    <Box p={3}>
                        <BarChart />
                    </Box>
                </Card>
            </Grid>

            <Grid item container lg={3} xs={12} rowSpacing={3} columnSpacing={3}>

                <Grid item>
                    <Card sx={{ width: 'fit-content', backgroundColor: 'rgba(14, 54, 156, 1)' }}>
                        <Box p={1}>
                            <CardContent sx={{ display: 'flex', justifyContent: 'space-between', gap: '100px' }}>
                                <Box>
                                    <Typography variant='body1' color='rgba(255, 255, 255, 0.87)'>
                                        Total earned this month
                                    </Typography>
                                    <Typography variant="h4" color='rgba(255, 255, 255, 1)'>
                                        39,354 <Typography variant='body1' component='span' color='rgba(255, 255, 255, 1)'>-9%</Typography>
                                    </Typography>
                                </Box>
                                <Box>
                                    <img src='/currency-illustration.svg' />
                                </Box>
                            </CardContent>
                            <CardActions>
                                <Button variant='contained' sx={{ backgroundColor: 'rgba(255, 179, 0, 1)' }} >View Details</Button>
                            </CardActions>
                        </Box>
                    </Card>
                </Grid>

                <Grid item>
            
                    <Card>
                        <CardContent  sx={{ display: 'flex', justifyContent: 'space-between',alignItems:'center' }}>
                        <Box >

                            <Typography variant='h5' color='black'>
                                Resource analytics &nbsp;
                            </Typography>

                                <Typography variant="h5" color='black'>
                                    25 &nbsp; <Typography variant='body1' component='span'> Total Interviews </Typography> 
                                </Typography><br/>

                                <Typography variant='body2' color='rgba(255, 179, 0, 1)'>
                                    5 Selected
                                    <Typography variant='body2' color='rgba(88, 134, 254, 1)' component='span' ml={3}>
                                        6 Reschedule 
                                    </Typography>
                                </Typography><br/>

                                <Typography variant='body2' color='rgba(14, 54, 156, 1)'>
                                    5 Rejected
                                    <Typography variant='body2' color='rgba(255, 64, 129, 1)' component='span' ml={3}>
                                        4 Not Show
                                    </Typography>
                                </Typography>

                            </Box>

                            <Box>
                                 <DoughnutChart />
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>

            </Grid>

        </Grid>
    )
}

export default Cards
