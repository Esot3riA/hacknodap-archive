import React, { Component } from 'react';
import MainAppBar from '../components/MainAppBar';
import GridTableContainer from './GridTableContainer';
import AddButton from '../components/AddButton';
import AppWrapper from '../components/AppWrapper';
import GlobalThemeProvider from '../components/GlobalThemeProvider';
import GlobalStyle from '../components/GlobalStyle';

class App extends Component {
  render() {
    return (
      <AppWrapper>
				<GlobalStyle />
				{ /* <GlobalThemeProvider> */ }
          <MainAppBar />
          <GridTableContainer />
          <AddButton />
				{ /* </GlobalThemeProvider> */ }
      </AppWrapper>
    );
  }
}

export default App;
