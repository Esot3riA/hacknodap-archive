import React from 'react'
import grey from '@material-ui/core/colors/grey';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: grey[800],
    },
  }
});

const MainAppBar = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" color="inherit">
            Hacknodap Archive
          </Typography>
        </Toolbar>
      </AppBar>
    </MuiThemeProvider>
  );
}

export default MainAppBar;