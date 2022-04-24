import { createTheme } from '@mui/material/styles';
// import { styled } from '@emotion/styled';
import { TextField, InputBase } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

export const InputTextfield = styled(TextField)({
    '& label': {
        color: 'rgba(63, 81, 181, 0.5)',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'rgba(63, 81, 181, 0.5)',
        }
    }
});


export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    color: 'rgba(0, 0, 0, 0.87)',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));


export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'rgba(14, 54, 156, 1)',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '20ch',
            '&:focus': {
                width: '35ch',
            },
        },
    },
}));


const theme = createTheme({
    typography: {
        h2: {
            fontFamily: "Open Sans",
            fontSize: 50,
            fontWeight: 300,
            color: "#1D263F",
        },
        h4: {
            fontFamily: "Open Sans",
            fontSize: 34,
            fontWeight: 300,
            color: "rgba(0, 0, 0, 0.87)",
        },
        h6: {
            fontFamily: "Open Sans",
            fontSize: 20,
            fontWeight: 600,
            color: "rgba(0, 0, 0, 0.87)",
        },
        subtitle1: {
            fontFamily: "Open Sans",
            fontSize: 16,
            fontWeight: 400,
            color: "rgba(0, 0, 0, 0.87)"
        },
        body1: {
            fontFamily: "Open Sans",
            fontSize: 16,
            fontWeight: 400,
            color: 'rgba(0, 0, 0, 0.38)'
        },
        body2: {
            fontFamily: "Open Sans",
            fontSize: 14,
            color: 'rgba(0, 0, 0, 0.5)'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    backgroundColor: 'rgba(14, 54, 156, 1)',
                    color: 'rgba(255, 255, 255, 1)',
                    fontFamily: "Open Sans",
                    fontWeight: 600
                },
                outlined: {
                    borderColor: 'rgba(14, 54, 156, 1)',
                    color: 'rgba(14, 54, 156, 1)'
                }
            }
        },
        MuiLink: {
            styleOverrides: {
                root: {
                    color: 'rgba(14, 54, 156, 1)',
                    textDecoration: 'none'
                }
            }
        },


        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
                        backgroundColor: "rgba(245, 245, 245, 1)",
                    },
                    "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
                        borderRadius: 8,
                        backgroundColor: "rgba(224, 224, 224, 1)",
                    },
                    "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
                        backgroundColor: "rgba(149, 149, 149, 0.5)",
                    },

                },
            },
        },

    },

})

export default theme
