import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const CREATE = 'timeline/CREATE';
const REMOVE = 'timeline/REMOVE';

export const create = createAction(CREATE);
export const remove = createAction(REMOVE);

const initialState = Map({
	histories: List([
		Map({
			location: 'left',
			date: '2018.11.09',
			title: '핵노답 아카이브 개발 중'
		}),
		Map({
			location: 'right',
			date: '2018.11.01',
			title: '핵노답 아카이브 개발 시작'
		})
	])
});

export default handleActions({
	[CREATE]: (state, action) => {
		return state;
	},
	[REMOVE]: (state, action) => {
		return state;
	}
}, initialState);