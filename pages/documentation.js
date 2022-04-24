import React from 'react';
import { Card, Grid, Typography, Link, Box, Button, Stack } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
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
    alignItems: 'stretch',
    marginTop: 1,
}

function documentation() {
    return (
        <Box sx={boxStyles} >
            <Card sx={{ height: '700px' }}>
                <Grid container >

                    <ImageRender image='/documentation-illustration.svg' />

                    <Grid item lg={6} xs={12} sx={gridItemStyles} >
                        <Grid item xs={12} px={3}>

                            <Typography variant="h2" >
                                Documentation
                            </Typography>
                            <Typography variant='subtitle1' mt={1}>
                                We will get back to you shortly after verifying your documents.
                            </Typography>

                            <Grid item my={3}>
                                <InputTextfield
                                    label='CIN Number'
                                    variant='outlined'
                                    fullWidth
                                />
                            </Grid>

                            <Grid container justifyContent='space-between'>

                                <Grid item lg={9} rowGap={2}>
                                    <Stack rowGap={3}>
                                        <Typography variant='subtitle1' >GST Certificate* </Typography>
                                        <Typography variant='subtitle1' >TAN Certificate</Typography>
                                        <Typography variant='subtitle1' >Shop Act Certificate</Typography>
                                        <Typography variant='subtitle1' >PE Establishment Certificate</Typography>
                                        <Typography variant='subtitle1' >MSME Certificate</Typography>
                                        <Typography variant='subtitle1' >PRF Certificate</Typography>
                                        <Typography variant='subtitle1' >Sign NDA*</Typography>
                                    </Stack>
                                </Grid>
                                <Grid item lg={3} >
                                    <Stack direction='column' rowGap={2}>
                                        <Button variant='outlined' startIcon={<UploadIcon />} >Upload</Button>
                                        <Button variant='outlined' startIcon={<UploadIcon />} >Upload</Button>
                                        <Button variant='outlined' startIcon={<UploadIcon />} >Upload</Button>
                                        <Button variant='outlined' startIcon={<UploadIcon />} >Upload</Button>
                                        <Button variant='outlined' startIcon={<UploadIcon />} >Upload</Button>
                                        <Button variant='outlined' startIcon={<UploadIcon />} >Upload</Button>
                                        <Button variant='outlined' startIcon={<UploadIcon />} >Upload</Button>
                                    </Stack>
                                </Grid>


                            </Grid>

                            <Grid item align='right' mt={5}>
                                <Link mr={5}>Skip</Link>  <Button variant='contained' >next</Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>
            </Card>
        </Box>
    )
}

export default documentation