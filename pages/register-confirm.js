import React from 'react';
import { Grid, Typography, Button } from '@mui/material';

function registerConfirm() {
    return (
        <Grid container direction='column' alignItems="center" justifyContent="center" rowSpacing={5} minHeight='100vh' >

            <Grid item>
                <img src='/registerConfirm-illustration.svg' />
            </Grid>

            <Grid item>
                <Typography variant='h2'> Congratulations! </Typography>
            </Grid>
            <Grid item textAlign='center'>
                <Typography variant="subtitle1" >
                    You have completed the onboarding process. You can start using HumanCloud.
                </Typography>
            </Grid>
            <Grid item>
                <Button variant="contained" >Let's Start</Button>
            </Grid>
        </Grid>
    )
}

export default registerConfirm
