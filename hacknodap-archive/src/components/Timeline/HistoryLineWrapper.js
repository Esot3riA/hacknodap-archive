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

const HistoryLineWrapper = ({ histories }) => {
	return (
		<HistoryLineWrapperDiv>
			<TopPadding />
			<HistoryLine
				histories={histories}/>
			<BottomPadding />
		</HistoryLineWrapperDiv>
	);
};

export default HistoryLineWrapper;