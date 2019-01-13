import React from 'react';
import Line from './Line';
import HistoryList from './HistoryList';
import styled from 'styled-components';

const TimelineDiv = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: center;
	height: 100%;
`;

const Timeline = ({ histories }) => {
	return (
		<TimelineDiv>
			<Line />
			<HistoryList
				histories={histories}/>
		</TimelineDiv>
	);
};

Timeline.defaultProps = {
	histories: []
}

export default Timeline;