import React, { Component } from 'react';
import MainAppBar from './components/MainAppBar';
import GridTable from './components/GridTable';
import AddButton from './components/AddButton';
import grey from '@material-ui/core/colors/grey';
import orange from '@material-ui/core/colors/orange';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.scss';

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

class App extends Component {
  render() {
    return (
      <div className="App">
        <MuiThemeProvider theme={theme}>
          <MainAppBar />
          <GridTable />
          <AddButton />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
