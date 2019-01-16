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
	height: 800px;
	background: #f8b500;
	box-shadow: 0 0 3px 1px orange;

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

const HistoryLine = ({ histories }) => {
	return (
			<LineDiv>
				<GlowLine />
				<HistoryList
					histories={histories}/>
			</LineDiv>
	);
}
export default HistoryLine;
