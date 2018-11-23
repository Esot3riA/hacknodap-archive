import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import deepOrange from '@material-ui/core/colors/deepOrange';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import GridTable from './components/GridTable';
import './App.scss';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepOrange[700],
    },
  }
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <AppBar position="static">
            <Toolbar>
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Hacknodap Archive
              </Typography>
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
        <GridTable />
      </div>
    );
  }
}

export default App;
