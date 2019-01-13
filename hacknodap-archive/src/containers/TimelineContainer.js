import Timeline from '../components/Timeline';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
	histories: state.get('histories')
});

const mapDispatchToProps = (state) => ({
	
});

const TimelineContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(Timeline);

export default TimelineContainer;