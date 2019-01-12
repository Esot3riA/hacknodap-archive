import React from 'react';
import grey from '@material-ui/core/colors/grey';
import orange from '@material-ui/core/colors/orange';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: {
      main: orange[500],
    },
  }
});

const GlobalThemeProvider = () => {
	return (
		<MuiThemeProvider theme={theme} />
	);
}

export default GlobalThemeProvider;