import React, { Component } from 'react';
import MainAppBar from './components/MainAppBar';
import GridTable from './components/GridTable';
import AddButton from './components/AddButton';
import grey from '@material-ui/core/colors/grey';
import orange from '@material-ui/core/colors/orange';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	* {
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
	}
`

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
})

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

class App extends Component {
  render() {
    return (
      <AppContainer>
				<GlobalStyle/>
        <MuiThemeProvider theme={theme}>
          <MainAppBar />
          <GridTable />
          <AddButton />
        </MuiThemeProvider>
      </AppContainer>
    );
  }
}

export default App;
