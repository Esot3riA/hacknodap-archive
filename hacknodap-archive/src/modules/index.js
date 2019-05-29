import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const OPEN_ADD_DIALOG = 'addButton/OPEN_ADD_DIALOG';
const CLOSE_ADD_DIALOG = 'addButton/CLOSE_ADD_DIALOG';
const OPEN_HISTORY_DIALOG = 'historyDialog/OPEN_HISTORY_DIALOG';
const CLOSE_HISTORY_DIALOG = 'historyDialog/CLOSE_HISTORY_DIALOG';
const CLOSE_SNACKBAR = 'snackBar/CLOSE_SNACKBAR';
const CHANGE_NEW_HISTORYDATE = 'addDialog/CHANGE_NEW_HISTORYDATE';
const CHANGE_NEW_HISTORYTITLE = 'addDialog/CHANGE_NEW_HISTORYTITLE';
const CHANGE_NEW_HISTORYIMAGE = 'addDialog/CHANGE_NEW_HISTORYIMAGE';
const ALERT_NO_IMAGE = 'addDialog/ALERT_NO_IMAGE';
const ALERT_ADD_NEW_HISTORY = 'addDialog/ALERT_ADD_NEW_HISTORY';
const RELOAD_HISTRORY = 'addDialog/RELOAD_HISTORY';

export const openAddDialog = createAction(OPEN_ADD_DIALOG);
export const closeAddDialog = createAction(CLOSE_ADD_DIALOG);
export const openHistoryDialog = createAction(OPEN_HISTORY_DIALOG);
export const closeHistoryDialog = createAction(CLOSE_HISTORY_DIALOG);
export const closeSnackBar = createAction(CLOSE_SNACKBAR);
export const changeNewHistoryDate =
      createAction(CHANGE_NEW_HISTORYDATE);  // @params newHistoryDate
export const changeNewHistoryTitle =
      createAction(CHANGE_NEW_HISTORYTITLE); // @params newHistoryTitle
export const changeNewHistoryImage =
      createAction(CHANGE_NEW_HISTORYIMAGE); // @params files
export const alertNoImage = createAction(ALERT_NO_IMAGE);
export const alertAddNewHistory = createAction(ALERT_ADD_NEW_HISTORY);
export const reloadHistory = createAction(RELOAD_HISTRORY);  // @params histories

const initialState = Map({
	isAddDialogOpen: false,
  isHistoryDialogOpen: false,
  isSnackBarOpen: false,
  snackBarMessage: 'Initial message',
  newHistoryData: Map({
    // Make YYYY-MM-DD format
    historyDate: new Date().toISOString().slice(0, 10),
    historyTitle: '',
    historyImages: List([])
  }),
  historyDialogData: Map({
    date: '1970-01-01',
    title: '핵노답 아카이브 개발 중',
    imageURL: List([])
  }),
	histories: List([
		// Map({
    //   topDistance: 150,
    //   location: 'left',
    //   date: '2018.11.09',
    //   title: '핵노답 아카이브 개발 중',
    //   imageURL: List([
    //      '/images/ce02f89cc3ba8d0fc3b8fc56238bd06d'
    //   ])
		// })
	])
});

export default handleActions({
	[OPEN_ADD_DIALOG]: state => {
	  return state.set('isAddDialogOpen', true);
  },
	[CLOSE_ADD_DIALOG]: state => {
		return state.set('isAddDialogOpen', false);
	},
  [OPEN_HISTORY_DIALOG]: state => {
	  return state.set('isHistoryDialogOpen', true);
  },
  [CLOSE_HISTORY_DIALOG]: state => {
	  return state.set('isHistoryDialogOpen', false);
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
  [ALERT_ADD_NEW_HISTORY]: state => {
    return state.set('snackBarMessage', 'Successfully uploaded.')
      .set('isSnackBarOpen', true)
      .set('isAddDialogOpen', false);
  },
  [RELOAD_HISTRORY]: (state, action) => {
	  return state.set('histories', action.payload);
  }
}, initialState);