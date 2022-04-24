import * as React from 'react';
import { connect } from 'react-redux';
import Cards from '../components/Cards';
import { getUserInfoAction } from '../reduxStore/actions';
import {
    Box, Drawer,
    Divider, Typography,
    Toolbar, IconButton,
    Avatar, CssBaseline, Grid, Stack
} from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SideBarList from '../components/SideBarList';
import { sideNavBarList } from '../src/constant';
import TableCustom from '../components/TableCustom';
import { Search, SearchIconWrapper, StyledInputBase } from '../src/theme';
import SearchField from '../components/SearchField';



const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    '& .MuiToolbar-root': {
        backgroundColor: 'rgba(250, 251, 251, 1)'
    }
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


function dashboard(props) {

    const { userData, getUserInfoAction } = props;

    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <>
                        <IconButton
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Dashboard
                        </Typography>
                    </>

                    <Stack direction='row' alignItems='center' columnGap={2}>
                        <SearchField />
                        <NotificationsIcon style={{ color: 'black' }} />

                        <Avatar src='/Profile.svg' onClick={() => getUserInfoAction()} />
                    </Stack>

                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: 'rgba(14, 54, 156, 1)'
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <img src='/humancloudlogo-illustration.png' />
                    <IconButton onClick={handleDrawerClose} >
                        {theme.direction === 'ltr' ? <MenuOpenIcon sx={{ color: 'rgba(255, 255, 255, 0.87)' }} /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />

                {
                    sideNavBarList.map((item) => {
                        return (
                            <React.Fragment key={item.label}>
                                <SideBarList label={item.label} icon={item.icon} path={item.path} />
                            </React.Fragment>
                        )
                    })
                }

            </Drawer>
            <Main open={open} style={{ backgroundColor: 'rgba(243, 245, 246, 1)' }}>
                <DrawerHeader />
                <Grid container rowSpacing={3}>
                    <Grid item>
                        <Cards />
                    </Grid>
                    <Grid item xs={12}>
                        <TableCustom />
                    </Grid>
                </Grid>
            </Main>
        </Box >
    );
}





const mapStateProps = (state) => ({
    userData: state
});

const mapDispatchToProps = {
    getUserInfoAction: getUserInfoAction
}

export default connect(mapStateProps, mapDispatchToProps)(dashboard)