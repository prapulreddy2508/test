import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Typography from '@mui/material/Typography';
import { Search, SearchIconWrapper, StyledInputBase } from '../src/theme';
import SearchIcon from '@mui/icons-material/Search';
import { Box, FormControl, InputLabel, Select, MenuItem, Grid, Fab } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchField from './SearchField';

const color = { backgroundColor: 'rgba(101, 142, 248, 1)', color: 'rgba(255, 255, 255, 1)' }

const emails = ['username@gmail.com', 'user02@gmail.com'];

function SimpleDialog(props) {
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle variant='h5'> Select Skills </DialogTitle>

            <Grid container >

                <Grid item lg={8}>

                    <SearchField />

                </Grid>

                <Grid item>

                    <Box sx={{ minWidth: '130px' }} >
                        <FormControl fullWidth size='small'>
                            <InputLabel>Full Stack</InputLabel>
                            <Select
                                // value={skills}
                                label='Full Stack'
                            // onChange={(e) => setSkill(e.target.value)}
                            >
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>

                </Grid>


            </Grid>

            <Grid container rowSpacing={3} py={2} px={3}>


                <Grid item lg={12}>
                    <Typography variant='body1' color='rgba(0, 0, 0, 0.87)' mb={1}>Technologies </Typography>

                    <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                        <Fab variant='extended' sx={color}>HTML</Fab>
                        <Fab variant='extended' >CSS</Fab>
                        <Fab variant='extended' >AJAX</Fab>
                        <Fab variant='extended' >JSON</Fab>
                        <Fab variant="extended"> Navigate </Fab>
                    </div>
                </Grid>

                <Grid item lg={12}>
                    <Typography variant='body1' color='rgba(0, 0, 0, 0.87)' mb={1}>Tools</Typography>

                    <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                        <Fab variant='extended'>GIT</Fab>
                        <Fab variant='extended' sx={color   }>VS CODE</Fab>
                        <Fab variant='extended' >INTELLJ</Fab>
                        <Fab variant='extended'>VS CODE</Fab>
                    </div>
                </Grid>

                <Grid item lg={12}>
                    <Typography variant='body1' color='rgba(0, 0, 0, 0.87)' mb={1}>Language and Scripting</Typography>

                    <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                        <Fab variant='extended'>GIT</Fab>
                        <Fab variant='extended'>JIRA</Fab>
                        <Fab variant='extended' sx={color}>SVN</Fab>
                        <Fab variant='extended'>NODE</Fab>
                    </div>
                </Grid>

                <Grid item lg={12}>

                    <Typography variant='body1' color='rgba(0, 0, 0, 0.87)' mb={1}>Database</Typography>

                    <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                        <Fab variant='extended' >SQL server</Fab>
                        <Fab variant='extended'>MySql</Fab>
                        <Fab variant='extended' sx={color}>Post</Fab>
                        <Fab variant='extended'>MongoDB</Fab>
                    </div>

                </Grid>

                <Grid item lg={12}>

                    <Typography variant='body1' color='rgba(0, 0, 0, 0.87)' mb={1}>OS</Typography>

                    <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                        <Typography >WINDOWS</Typography>
                        <Typography style={{ backgroundColor: 'rgba(101, 142, 248, 1)', color: 'rgba(255, 255, 255, 1)', borderRadius: '12px', padding: '7px' }}>SVN</Typography>
                        <Typography >LINUX</Typography>
                    </div>

                </Grid>

                <Grid item lg={12} xs={12} align='right'>
                    <Button variant='contained'>Done</Button>
                </Grid>

            </Grid>

        </Dialog>
    );
}



function FilterSkills() {

    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };


    return (
        <div>
            <FilterListIcon onClick={handleClickOpen} />
            <SimpleDialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </div>
    )
}

export default FilterSkills