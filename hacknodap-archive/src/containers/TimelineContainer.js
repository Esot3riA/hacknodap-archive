import Timeline from '../components/Timeline';
import { connect } from 'react-redux';
import * as actions from "../modules";

const mapStateToProps = (state) => ({
	histories: state.get('histories')
});

const mapDispatchToProps = (dispatch) => ({
	onOpenHistoryDialog: () => dispatch(actions.openHistoryDialog()),
});

const TimelineContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Timeline);

export default TimelineContainer;