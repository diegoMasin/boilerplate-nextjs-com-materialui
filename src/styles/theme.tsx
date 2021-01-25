import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#003521',
      contrastText: '#fff',
    },
    secondary: {
      main: '#00825e',
      contrastText: '#fff',
    },
    error: {
      main: '#f44336 ',
      contrastText: '#fff',
    },
    background: {
      default: '#EEE',
    },
  },
});

export default theme;
