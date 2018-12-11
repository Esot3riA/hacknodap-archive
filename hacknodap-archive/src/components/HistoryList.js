import React from 'react';
import History from './History';
import styled from 'styled-components';

const HistoryListDiv = styled.div`
	position: absolute;
`

const HistoryList = ({ historyData }) => {
	const histories = historyData.map(historyInfo => (
			<History
				key={historyInfo.id}
				location={historyInfo.location}
				date={historyInfo.date}
				title={historyInfo.title}
			/>
	));
	
	return(
		<HistoryListDiv>
			{histories}
		</HistoryListDiv>
	);
}

export default HistoryList;
