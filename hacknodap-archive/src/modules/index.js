import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const CREATE = 'timeline/CREATE';
const REMOVE = 'timeline/REMOVE';
const OPEN_ADD_DIALOG = 'addButton/OPEN_ADD_DIALOG';
const CLOSE_ADD_DIALOG = 'addButton/CLOSE_ADD_DIALOG';
const CHANGE_NEW_HISTORYDATE = 'addDialog/CHANGE_NEW_HISTORYDATE';

export const create = createAction(CREATE);
export const remove = createAction(REMOVE);
export const openAddDialog = createAction(OPEN_ADD_DIALOG);
export const closeAddDialog = createAction(CLOSE_ADD_DIALOG);
export const changeNewHistoryDate =
      createAction(CHANGE_NEW_HISTORYDATE);  // newHistoryDate

const initialState = Map({
	isAddDialogOpen: false,
  newHistoryData: Map({
    // Make YYYY-MM-DD format
    historyDate: new Date().toISOString().slice(0, 10)
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
	[CREATE]: (state) => {
		return state;
	},
	[REMOVE]: (state) => {
		return state;
	},
	[OPEN_ADD_DIALOG]: (state) => {
		return state.set('isAddDialogOpen', true);
	},
	[CLOSE_ADD_DIALOG]: (state) => {
		return state.set('isAddDialogOpen', false);
	},
  [CHANGE_NEW_HISTORYDATE]: (state, action) => {
    return state.setIn(['newHistoryData', 'historyDate'], action.payload);
  }
}, initialState);