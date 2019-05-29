import React, { Component } from 'react';
import Timeline from '../components/Timeline';
import { connect } from 'react-redux';
import * as actions from "../modules";

class TimelineContainer extends Component {
	handleClickHistory = (_id) => {
		const { onOpenHistoryDialog } = this.props;
		// do something with axios
		onOpenHistoryDialog();
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
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TimelineContainer);