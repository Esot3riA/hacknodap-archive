import React from 'react';
import Line from './Line';
import HistoryList from './HistoryList';
import styled from 'styled-components';

const HistoryLineDiv = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: center;
	height: 100%;
`;

const HistoryLine = ({ histories }) => {
	return (
		<HistoryLineDiv>
			<Line />
			<HistoryList
				histories={histories}/>
		</HistoryLineDiv>
	);
};

HistoryLine.defaultProps = {
	histories: []
}

export default HistoryLine;