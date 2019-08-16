import React from 'react';
import HistoryList from './HistoryList';
import styled from 'styled-components';

const LineDiv = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

const GlowLine = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 3px;
	height: ${props => props.lineLength}px;
	background: #f8b500;
	box-shadow: 0 0 3px 1px orange;
	
	// Glow circle
	&::after {
		content: '';
		position: absolute;
		width: 8px;
		height: 8px;
		background-color: white;
		border-radius: 50%;
		animation: glow 0.7s infinite alternate;
		@keyframes glow {
			from {
				box-shadow: 0 0 8px 2px orange;
			}
			to {
				box-shadow: 0 0 8px 6px orange;
			}
		}
	}
`;

const HistoryLine = ({ histories, onClickHistory }) => {
	// Calculate length of history line
	const baseLineLength = 1500;
	const linePadding = 300;
	
	let lineLength = baseLineLength;
	const lastHistory = histories.get(-1);
	if (lastHistory !== undefined) {
		const historyDistance = lastHistory.get('topDistance') + linePadding;
		lineLength = (historyDistance > baseLineLength) ? historyDistance : baseLineLength;
	}
	
	return (
		<LineDiv>
			<GlowLine lineLength={lineLength} />
			<HistoryList
				histories={histories}
				onClickHistory={onClickHistory} />
		</LineDiv>
	);
};

export default HistoryLine;
