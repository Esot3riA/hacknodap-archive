import React, { Component } from 'react';
import Header from '../components/Header';
import AddButton from '../components/AddButton';
import AddDialog from '../components/AddDialog';
import InfoSnackBar from "../components/SnackBar/InfoSnackBar";
import AppWrapper from '../components/AppWrapper';
import GlobalStyle from '../components/GlobalStyle';
import TimelineContainer from './TimelineContainer';
import grey from '@material-ui/core/colors/grey';
import orange from '@material-ui/core/colors/orange';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../modules';
import { fromJS } from 'immutable';
import { Properties } from '../config/properties';
import positionHistory from '../utils/HistoryPositioner';

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
  
  handleReload = () => {
    const { onReloadHistory } = this.props;
    axios.get(Properties.restAPIURL + '/histories').then(response => {
      const histories = fromJS(positionHistory(response.data));
      onReloadHistory(histories);
    });
  };
  handleAddNewHistory = (newHistoryData) => {
    const { onAlertNoImage, onAlertAddNewHistory } = this.props;
    const { historyDate, historyTitle, historyImages } = newHistoryData.toJS();
    if (historyImages.length <= 0)
      onAlertNoImage();
    else {
      const formData = new FormData();
      formData.append('date', historyDate);
      formData.append('title', historyTitle);
      historyImages.forEach(image => formData.append('image', image));
      axios.post(Properties.restAPIURL + '/histories', formData)
        .then(() => {
          onAlertAddNewHistory();
          this.handleReload();
        });
    }
  };
  
  componentDidMount() {
    this.handleReload();
  };
  
  render() {
    const { isAddDialogOpen, isSnackBarOpen, snackBarMessage,
          newHistoryData, onAddDialogOpen, onAddDialogClose, onSnackbarClose,
          onChangeNewHistoryDate, onChangeNewHistoryTitle,
          onChangeNewHistoryImage } = this.props;
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
            onSubmit={this.handleAddNewHistory} />
          <InfoSnackBar
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
  onReloadHistory: (histories) => dispatch(actions.reloadHistory(histories)),
  onAlertNoImage: () => dispatch(actions.alertNoImage()),
  onAlertAddNewHistory: () => dispatch(actions.alertAddNewHistory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);