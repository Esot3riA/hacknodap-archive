import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const OPEN_ADD_DIALOG = 'addButton/OPEN_ADD_DIALOG';
const CLOSE_ADD_DIALOG = 'addButton/CLOSE_ADD_DIALOG';
const CLOSE_SNACKBAR = 'snackBar/CLOSE_SNACKBAR';
const CHANGE_NEW_HISTORYDATE = 'addDialog/CHANGE_NEW_HISTORYDATE';
const CHANGE_NEW_HISTORYTITLE = 'addDialog/CHANGE_NEW_HISTORYTITLE';
const CHANGE_NEW_HISTORYIMAGE = 'addDialog/CHANGE_NEW_HISTORYIMAGE';
const ALERT_NO_IMAGE = 'addDialog/ALERT_NO_IMAGE';
const SUCCESS_NEW_HISTORY = 'addDialog/SUCCESS_NEW_HISTORY';

export const openAddDialog = createAction(OPEN_ADD_DIALOG);
export const closeAddDialog = createAction(CLOSE_ADD_DIALOG);
export const closeSnackBar = createAction(CLOSE_SNACKBAR);
export const changeNewHistoryDate =
      createAction(CHANGE_NEW_HISTORYDATE);  // @params newHistoryDate
export const changeNewHistoryTitle =
      createAction(CHANGE_NEW_HISTORYTITLE); // @params newHistoryTitle
export const changeNewHistoryImage =
      createAction(CHANGE_NEW_HISTORYIMAGE); // @params files
export const alertNoImage = createAction(ALERT_NO_IMAGE);
export const successNewHistory = createAction(SUCCESS_NEW_HISTORY);

const initialState = Map({
	isAddDialogOpen: false,
  isSnackBarOpen: false,
  snackBarMessage: 'Initial message',
  newHistoryData: Map({
    // Make YYYY-MM-DD format
    historyDate: new Date().toISOString().slice(0, 10),
    historyTitle: '',
    historyImages: List([])
  }),
	histories: List([
		Map({
      topDistance: 150,
      location: 'left',
      date: '2018.11.09',
      title: '핵노답 아카이브 개발 중',
      imageURL: 'https://raw.githubusercontent.com/Esot3riA/hacknodap-archive/master/image1.jpg'
		}),
		Map({
      topDistance: 250,
			location: 'right',
			date: '2018.11.01',
			title: '핵노답 아카이브 개발 시작',
			imageURL: 'https://raw.githubusercontent.com/Esot3riA/hacknodap-archive/master/image2.jpg'
		})
	])
});

export default handleActions({
	[OPEN_ADD_DIALOG]: state => {
	  return state.set('isAddDialogOpen', true);
  },
	[CLOSE_ADD_DIALOG]: state => {
		return state.set('isAddDialogOpen', false);
	},
  [CLOSE_SNACKBAR]: state => {
	  return state.set('isSnackBarOpen', false);
  },
  [CHANGE_NEW_HISTORYDATE]: (state, action) => {
    return state.setIn(['newHistoryData', 'historyDate'], action.payload);
  },
  [CHANGE_NEW_HISTORYTITLE]: (state, action) => {
    return state.setIn(['newHistoryData', 'historyTitle'], action.payload);
  },
  [CHANGE_NEW_HISTORYIMAGE]: (state, action) => {
    return state.setIn(['newHistoryData', 'historyImages'], action.payload);
  },
  [ALERT_NO_IMAGE]: state => {
    return state.set('snackBarMessage', 'Please select a picture.')
      .set('isSnackBarOpen', true);
  },
  [SUCCESS_NEW_HISTORY]: state => {
    return state.set('snackBarMessage', 'Successfully uploaded.')
      .set('isSnackBarOpen', true)
      .set('isAddDialogOpen', false);
  }
}, initialState);