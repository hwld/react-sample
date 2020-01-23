import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#616161',
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
