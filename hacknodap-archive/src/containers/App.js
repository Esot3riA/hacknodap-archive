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
import AlertSnackBar from "../components/SnackBar/AlertSnackBar";

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
    const { isAddDialogOpen, isSnackBarOpen, snackBarMessage,
          newHistoryData, onAddDialogOpen, onAddDialogClose, onSnackbarClose,
          onChangeNewHistoryDate, onChangeNewHistoryTitle,
          onChangeNewHistoryImage, onAddNewHistory } = this.props;
    return (
      <AppWrapper>
	      <GlobalStyle />
	      <MuiThemeProvider theme={theme}>
          <Header />
          <TimelineContainer />
          <AddButton onOpen={onAddDialogOpen}/>
          <AddDialog
            open={isAddDialogOpen}
            newHistoryData={newHistoryData}
            onClose={onAddDialogClose}
            onChangeDate={onChangeNewHistoryDate}
            onChangeTitle={onChangeNewHistoryTitle}
            onChangeImage={onChangeNewHistoryImage}
            onSubmit={onAddNewHistory} />
          <AlertSnackBar
            open={isSnackBarOpen}
            onClose={onSnackbarClose}
            message={snackBarMessage}
          />
	      </MuiThemeProvider>
      </AppWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  isAddDialogOpen: state.get('isAddDialogOpen'),
  isSnackBarOpen: state.get('isSnackBarOpen'),
  snackBarMessage: state.get('snackBarMessage'),
  newHistoryData: state.get('newHistoryData')
});

const mapDispatchToProps = (dispatch) => ({
  onAddDialogOpen: () => dispatch(actions.openAddDialog()),
  onAddDialogClose: () => dispatch(actions.closeAddDialog()),
  onSnackbarClose: () => dispatch(actions.closeSnackBar()),
  onChangeNewHistoryDate: (newHistoryDate) => dispatch(actions.changeNewHistoryDate(newHistoryDate)),
  onChangeNewHistoryTitle: (newHistoryTitle) => dispatch(actions.changeNewHistoryTitle(newHistoryTitle)),
  onChangeNewHistoryImage: (newHistoryImage) => dispatch(actions.changeNewHistoryImage(newHistoryImage)),
  onAddNewHistory: () => dispatch(actions.addNewHistory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);