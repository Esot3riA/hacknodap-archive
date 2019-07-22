import React, { Component } from 'react';
import Timeline from '../components/Timeline';
import { connect } from 'react-redux';
import * as actions from "../modules";
import axios from 'axios';
import { Properties } from '../config/properties';
import { fromJS } from 'immutable';

class TimelineContainer extends Component {
	
	componentDidMount() {
		const { onReloadCurrentTime } = this.props;
		setInterval(onReloadCurrentTime, 1000);
	}
	
	handleClickHistory = (_id) => {
		const { onOpenHistoryDialog, loadHistoryDialog } = this.props;
		onOpenHistoryDialog();
		
		axios.get(Properties.restAPIURL + '/history/' + _id).then(res => {
			loadHistoryDialog(fromJS(res.data));
		});
	};
	
	render() {
		const { histories, currentTime } = this.props;
		return (
			<Timeline
				histories={histories}
				currentTime={currentTime}
				onClickHistory={this.handleClickHistory} />
		);
	}
}

const mapStateToProps = (state) => ({
	currentTime: state.get('currentTime'),
	histories: state.get('histories')
});

const mapDispatchToProps = (dispatch) => ({
	onOpenHistoryDialog: () => dispatch(actions.openHistoryDialog()),
	loadHistoryDialog: (history) => dispatch(actions.loadHistoryDialog(history)),
	onReloadCurrentTime: () => dispatch(actions.reloadCurrentTime())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TimelineContainer);