import React from 'react'
import { Grid } from '@mui/material';


function ImageRender(props) {

    const { image } = props

    return (
        <Grid item lg={6} display={{ xs: 'none', lg: "flex", }} style={{float: 'left',height:'100%',overflow: 'hidden'}} >
            <img src={image} />
        </Grid>
    )
}

export default ImageRender
