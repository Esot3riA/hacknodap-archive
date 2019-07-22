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
	height: 1500px;
	background: #f8b500;
	box-shadow: 0 0 3px 1px orange;
	
	// Time counter
	&::before {
		content: '${props => props.currentTime}';
		position: relative;
		top: -35px;
		width: 150px;
		height: 18px;
		background-color: rgb(40, 40, 40);
		border-radius: 10px;
		font-size: small;
		color: white;
		text-align: center;
	}
	
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

const HistoryLine = ({ histories, currentTime, onClickHistory }) => {
	return (
			<LineDiv>
				<GlowLine
					currentTime={currentTime} />
				<HistoryList
					histories={histories}
					onClickHistory={onClickHistory} />
			</LineDiv>
	);
};

export default HistoryLine;
