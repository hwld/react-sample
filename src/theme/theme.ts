import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#dd2c00',
    },
    text: {
      primary: '#ffffff',
    },
  },
  props: {
    MuiTypography: {
      color: 'textPrimary',
    },
  },
});

export default theme;
