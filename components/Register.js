import React from 'react';
import { Card, Grid, Typography, Box, Button } from '@mui/material';
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
    padding: '2rem',
    
}

function Register(props) {

   
    const {handleStepper} = props;

  return (
    <Box sx={boxStyles} >
    <Card sx={{ height: '700px' }}>
        <Grid container >

            <Grid item lg={6} display={{ xs: 'none', lg: "flex" }}  >
                <img src='/register-illustration.svg' style={{ overflow: 'hidden', width: '100%', height: '100%', position: 'relative' }} />
                <img src='/registelogor-illustration.svg' style={{ position: 'absolute', margin: '470px', bottom: '-270px', width: '80px' }} />
            </Grid>
            {/* <ImageRender image='/register-illustration.svg' /> */}

            <Grid item lg={6} xs={12} sx={gridItemStyles} >
                <Grid item xs={12} >

                    <Typography variant="h4" >
                        Let's Setup your
                    </Typography>
                    <Typography variant="h4" fontWeight={300}>
                        company
                    </Typography>
                    <Typography variant='subtitle1' mt={1}>
                        We'll streamline your experience accordingly
                    </Typography>

                    <Grid item my={3} display='flex' alignItems='center'>
                        <img src='/uploadlogo-illustration.svg' />
                        <Typography variant='body2' mx={2}>
                            Upload logo
                        </Typography>
                    </Grid>

                    <Grid item my={3}>
                        <InputTextfield
                            label='Company Name'
                            variant='outlined'
                            fullWidth
                        />
                    </Grid>

                    <Grid item my={3}>
                        <InputTextfield
                            label='Company Size'
                            variant='outlined'
                            fullWidth
                        />
                    </Grid>

                    <Grid item align='right'  >
                        <Button variant='contained' onClick={()=>handleStepper(2)}>Next</Button>
                    </Grid>

                </Grid>
            </Grid>

        </Grid >
    </Card >
</Box >
  )
}

export default Register