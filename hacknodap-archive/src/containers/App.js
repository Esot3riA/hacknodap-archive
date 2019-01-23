import React, { Component } from 'react';
import Header from '../components/Header';
import AddButton from '../components/AddButton';
import AddDialog from '../components/AddDialog';
import AppWrapper from '../components/AppWrapper';
import GlobalStyle from '../components/GlobalStyle';
import TimelineContainer from './TimelineContainer';
import grey from '@material-ui/core/colors/grey';
import orange from '@material-ui/core/colors/orange';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import * as actions from '../modules';

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
    const { isAddDialogOpen, onOpen, onClose } = this.props;
    return (
      <AppWrapper>
				<GlobalStyle />
				<MuiThemeProvider theme={theme}>
          <Header />
          <TimelineContainer />
          <AddButton onOpen={onOpen}/>
          <AddDialog
            open={isAddDialogOpen}
            onClose={onClose}/>
				</MuiThemeProvider>
      </AppWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  isAddDialogOpen: state.get('isAddDialogOpen'),
});

const mapDispatchToProps = (dispatch) => ({
  onOpen: () => dispatch(actions.openAddDialog()),
  onClose: () => dispatch(actions.closeAddDialog()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);