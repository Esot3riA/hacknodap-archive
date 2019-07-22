import React from 'react';
import HistoryLine from './HistoryLine';
import styled from 'styled-components';

const HistoryLineWrapperDiv = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TopPadding = styled.div`
	height: 150px;
`;

const BottomPadding = styled.div`
	height: 150px;
`;

const HistoryLineWrapper = ({ histories, currentTime, onClickHistory }) => {
	return (
		<HistoryLineWrapperDiv>
			<TopPadding />
			<HistoryLine
				histories={histories}
				currentTime={currentTime}
				onClickHistory={onClickHistory} />
			<BottomPadding />
		</HistoryLineWrapperDiv>
	);
};

export default HistoryLineWrapper;