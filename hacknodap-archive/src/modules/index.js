import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';
import axios from 'axios';

const restAPIURL = 'https://hacknodap-archive-server.run.goorm.io';

const OPEN_ADD_DIALOG = 'addButton/OPEN_ADD_DIALOG';
const CLOSE_ADD_DIALOG = 'addButton/CLOSE_ADD_DIALOG';
const CHANGE_NEW_HISTORYDATE = 'addDialog/CHANGE_NEW_HISTORYDATE';
const CHANGE_NEW_HISTORYTITLE = 'addDialog/CHANGE_NEW_HISTORYTITLE';
const CHANGE_NEW_HISTORYIMAGE = 'addDialog/CHANGE_NEW_HISTORYIMAGE';
const ADD_NEW_HISTORY = 'addDialog/ADD_NEW_HISTORY';

export const openAddDialog = createAction(OPEN_ADD_DIALOG);
export const closeAddDialog = createAction(CLOSE_ADD_DIALOG);
export const changeNewHistoryDate =
      createAction(CHANGE_NEW_HISTORYDATE);  // newHistoryDate
export const changeNewHistoryTitle =
      createAction(CHANGE_NEW_HISTORYTITLE); // newHistoryTitle
export const changeNewHistoryImage =
      createAction(CHANGE_NEW_HISTORYIMAGE); // files
export const addNewHistory = createAction(ADD_NEW_HISTORY);

const initialState = Map({
	isAddDialogOpen: false,
  newHistoryData: Map({
    // Make YYYY-MM-DD format
    historyDate: new Date().toISOString().slice(0, 10),
    historyTitle: '',
    historyImages: List([])
  }),
	histories: List([
		Map({
			location: 'left',
			date: '2018.11.09',
			title: '핵노답 아카이브 개발 중',
			imageURL: 'https://raw.githubusercontent.com/Esot3riA/hacknodap-archive/master/image1.jpg'
		}),
		Map({
			location: 'right',
			date: '2018.11.01',
			title: '핵노답 아카이브 개발 시작',
			imageURL: 'https://raw.githubusercontent.com/Esot3riA/hacknodap-archive/master/image2.jpg'
		})
	])
});

export default handleActions({
	[OPEN_ADD_DIALOG]: (state) => {
		return state.set('isAddDialogOpen', true);
	},
	[CLOSE_ADD_DIALOG]: (state) => {
		return state.set('isAddDialogOpen', false);
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
  [ADD_NEW_HISTORY]: (state) => {
    const newHistoryData = state.get('newHistoryData');
    const { historyDate, historyTitle, historyImages } = newHistoryData.toJS();
    
    axios.put(restAPIURL + '/history', {
      date: historyDate,
      title: historyTitle,
      images: historyImages
    }).then(response => console.log(response));
    return state;
  }
}, initialState);