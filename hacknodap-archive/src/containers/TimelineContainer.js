import React, { Component } from 'react';
import Timeline from '../components/Timeline';
import { connect } from 'react-redux';
import * as actions from "../modules";
import axios from 'axios';
import { Properties } from '../config/properties';
import { fromJS } from 'immutable';

class TimelineContainer extends Component {
	
	shouldComponentUpdate(nextProps, nextState, nextContext) {
		return this.props !== nextProps;
	}
	
	handleClickHistory = (_id) => {
		const { onOpenHistoryDialog, loadHistoryDialog } = this.props;
		onOpenHistoryDialog();
		
		axios.get(Properties.restAPIURL + '/history/' + _id).then(res => {
			loadHistoryDialog(fromJS(res.data));
		});
	};
	
	render() {
		const { histories } = this.props;
		return (
			<Timeline
				histories={histories}
				onClickHistory={this.handleClickHistory} />
		);
	}
}

const mapStateToProps = (state) => ({
	histories: state.get('histories')
});

const mapDispatchToProps = (dispatch) => ({
	onOpenHistoryDialog: () => dispatch(actions.openHistoryDialog()),
	loadHistoryDialog: (history) => dispatch(actions.loadHistoryDialog(history))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TimelineContainer);