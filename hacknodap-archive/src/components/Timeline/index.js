import React from 'react';
import HistoryLineWrapper from './HistoryLineWrapper';
import styled from 'styled-components';

const Background = styled.div`
  flex: 1;
  background-color: #434343;
  background-image: linear-gradient(#434343, #282828);
`;

const Grid = styled.div`
	background-color: transparent;
	background: linear-gradient(
									0deg,
									transparent 24%,
									rgba(255, 255, 255, .05) 25%,
									rgba(255, 255, 255, .05) 26%,
									transparent 27%,
									transparent 74%,
									rgba(255, 255, 255, .05) 75%,
									rgba(255, 255, 255, .05) 76%,
									transparent 77%, transparent),
	linear-gradient(
									90deg, transparent 24%,
									rgba(255, 255, 255, .05) 25%,
									rgba(255, 255, 255, .05) 26%,
									transparent 27%,
									transparent 74%,
									rgba(255, 255, 255, .05) 75%,
									rgba(255, 255, 255, .05) 76%,
									transparent 77%, transparent);
	background-size: 50px 50px;
	height: 100%;
`;

const Timeline = ({ histories, currentTime, onClickHistory }) => {
	return (
		<Background>
			<Grid>
				<HistoryLineWrapper
					histories={histories}
					currentTime={currentTime}
					onClickHistory={onClickHistory} />
			</Grid>
		</Background>
	);
};

export default Timeline;