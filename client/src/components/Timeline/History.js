import React from 'react';
import styled, { css } from 'styled-components';
import { Properties } from '../../config/properties';

const HistoryDiv = styled.div`
	position: absolute;
  width: 300px;
  height: 250px;
  background-color: #f8b500;
  border: 3px solid #f8b500;
  border-radius: 5px;
  top: ${props => props.topDistance}px;
	
  ${props =>
    (props.location === 'left') &&
		css`
			left: 60px;
			transition: all 200ms ease;

			&:hover {
				box-shadow: 0 0 5px 2px orange;
				cursor: pointer;
			}

			// Direction arrow
			&::before {
				content: '';
				position: absolute;
				top: 12px;
				left: -23px;
				border-style: solid;
				border-width: 10px 20px 10px 0;
				border-color: transparent #f8b500 transparent transparent;
			}

			// History circle
			&::after {
				content: '';
				position: absolute;
				width: 15px;
				height: 15px;
				top: 10px;
				left: -75px;
				background-color: white;
				border: 4px solid #f8b500;
				border-radius: 50%;
				transition: all 200ms ease;
				box-shadow: 0 0 2px 1px orange;
			}
			&:hover::after {
				box-shadow: 0 0 10px 3px orange;
			}
	`};

	${props =>
		(props.location === 'right') &&
		css`
			left: -360px;
			transition: all 200ms ease;

			&:hover {
				box-shadow: 0 0 5px 2px orange;
				cursor: pointer;
			}

			// Direction arrow
			&::before {
				content: '';
				position: absolute;
				top: 12px;
				right: -23px;
				border-style: solid;
				border-width: 10px 0 10px 20px;
				border-color: transparent transparent transparent #f8b500;
			}

			// History circle
			&::after {
				content: '';
				position: absolute;
				width: 15px;
				height: 15px;
				top: 10px;
				left: 346px;
				background-color: white;
				border: 4px solid #f8b500;
				border-radius: 50%;
				transition: all 200ms ease;
				box-shadow: 0 0 2px 1px orange;
			}

			&:hover::after {
				box-shadow: 0 0 10px 3px orange;
			}
	`};
`;

const HistoryHead = styled.div`
	height: 17%;
	background-color: #f8b500;
	padding: 3px 5px;
`;
const Date = styled.div`
	color: white;
	font-size: small;
`;
const Title = styled.div`
	color: white;
	font-size: small;
	font-weight: bold;
`;

const HistoryBody = styled.div`
	height: 83%;
	background-color: #ffedbd;
	padding: 5px;
`;
const Picture = styled.img`
	object-fit: cover;
	object-position: 50% 20%;
	height: 100%;
	width: 100%;
`;

const History = ({ onClickHistory, _id, topDistance, location,
									 date, title, imageURL }) => {
	
	const handleClick = () => {
		onClickHistory(_id);
	};
	
	return (
		<HistoryDiv
			topDistance={topDistance}
			location={location}
			onClick={handleClick}>
			<HistoryHead>
				<Date>{date}</Date>
				<Title>{title}</Title>
			</HistoryHead>
			<HistoryBody>
				<Picture src={Properties.s3URL + imageURL[0]} />
			</HistoryBody>
		</HistoryDiv>
	);
};

export default History;