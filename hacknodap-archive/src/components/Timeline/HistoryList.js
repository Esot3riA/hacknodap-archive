import React from 'react';
import History from './History';
import styled from 'styled-components';

const HistoryListDiv = styled.div`
	position: absolute;
`;

const HistoryList = ({ histories, onClickHistory }) => {
	const historyList = histories.map((history, i) => (
			<History
				key={i}
				index={i}
				onClickHistory={onClickHistory}
				{...history.toJS()}
			/>
	));
	
	return (
		<HistoryListDiv>
			{historyList}
		</HistoryListDiv>
	);
};

export default HistoryList;