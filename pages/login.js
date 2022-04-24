import * as React from 'react';
import { Card, Grid, Typography, Link, Box, Button } from '@mui/material';
import ImageRender from '../components/ImageRender';
import { InputTextfield } from '../src/theme';

const boxStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
}

const gridItemStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding:'2rem'
}


function login(props) {

    return (
        <Box sx={boxStyles} >
            <Card sx={{ height: '700px' }}>
                <Grid container >

                    <ImageRender image='/login-illustration.svg' />

                    <Grid item lg={6} xs={12} sx={gridItemStyles} >
                        <Grid item xs={12} px={6}>

                            <Typography variant="h4" >
                                Welcome Back
                            </Typography>
                            <Typography variant='subtitle1' mt={1}>
                                Don't have an account? <Link href='/register' >Register</Link>
                            </Typography>

                            <Grid item my={3}>
                                <InputTextfield
                                    label='Company email'
                                    variant='outlined'
                                    fullWidth
                                />
                            </Grid>

                            <Grid item >
                                <InputTextfield
                                    label='Password'
                                    type='password'
                                    variant='outlined'
                                    fullWidth
                                />
                            </Grid>

                            <Grid item my={3}>
                                <Link href='#' >Forgot Password?</Link>
                            </Grid>

                            <Grid item align='right' >
                                <Button variant='contained' >Login</Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Card>
        </Box>
    );
}

export default login