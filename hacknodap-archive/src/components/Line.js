import React from 'react';
import styled from 'styled-components';

const GlowLine = styled.div`
	display: flex;
	align-items: center;
	width: 800px;
	height: 3px;
	background: #f8b500;
	box-shadow: 0 0 3px 1px orange;

	&::after {
		content: '';
		position: absolute;
		width: 8px;
		height: 8px;
		left: 800px;
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
`

const Line = () => {
	return(
		<GlowLine />
	);
}

export default Line;
