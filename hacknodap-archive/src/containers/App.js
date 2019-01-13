import React, { Component } from 'react';
import Header from '../components/Header';
import AddButton from '../components/AddButton';
import AppWrapper from '../components/AppWrapper';
import GlobalStyle from '../components/GlobalStyle';
import TimelineContainer from './TimelineContainer';

import grey from '@material-ui/core/colors/grey';
import orange from '@material-ui/core/colors/orange';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: grey[800]
    },
    secondary: {
      main: orange[500]
    },
  }
});

class App extends Component {
  render() {
    return (
      <AppWrapper>
				<GlobalStyle />
				<MuiThemeProvider theme={theme}>
          <Header />
          <TimelineContainer />
          <AddButton />
				</MuiThemeProvider>
      </AppWrapper>
    );
  }
}

export default App;
