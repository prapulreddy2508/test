import '../styles/globals.css';
import { wrapper, store } from '../reduxStore/store';
import { Provider } from 'react-redux';
import theme from '../src/theme';
import { ThemeProvider } from '@mui/material/styles';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  )
}

export default wrapper.withRedux(MyApp)
