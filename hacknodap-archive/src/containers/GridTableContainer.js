import GridTable from '../components/GridTable';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
	histories: state.get('histories')
});

const mapDispatchToProps = (state) => ({
	
});

const GridTableContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(GridTable);

export default GridTableContainer;