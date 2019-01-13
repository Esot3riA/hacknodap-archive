import React from 'react';
import styled, { css } from 'styled-components';

const HistoryContainer = styled.div`
	position: absolute;
  width: 300px;
  height: 250px;
  background-color: #f8b500;
  border: 3px solid #f8b500;
  border-radius: 5px;

  ${props =>
    (props.location === 'top') && 
		css`
      top: calc(50% - 250px - 50px);
			left: 100px;  // auto-calculated value (later)
			transition: all 200ms ease;

			&:hover {
				box-shadow: 0 0 5px 2px orange;
				cursor: pointer;
			}

			// direction arrow
			&::before {
				content: '';
				position: absolute;
				top: calc(250px - 3px);
				left: calc(300px / 2 - 13px);
				border-style: solid;
				border-width: 20px 10px 0 10px;
				border-color: #f8b500 transparent transparent transparent;
			}

			// history circle
			&::after {
				content: '';
				position: absolute;
				width: 15px;
				height: 15px;
				top: calc(250px + 50px - 13px);
				left: calc(300px / 2 - 15px);
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
		(props.location === 'bottom') &&
		css`
			top: calc(50% + 50px);
			left: 200px;  // auto-calculated value (later)
			transition: all 200ms ease;

			&:hover {
				box-shadow: 0 0 5px 2px orange;
				cursor: pointer;
			}

			// direction arrow
			&::before {
				content: '';
				position: absolute;
				top: -23px;
				left: calc(300px / 2 - 13px);
				border: solid;
				border-width: 0 10px 20px 10px;
				border-color: transparent transparent #f8b500 transparent;
			}

			// history circle
			&::after {
				content: '';
				position: absolute;
				width: 15px;
				height: 15px;
				top: -63px;
				left: calc(300px / 2 - 15px);
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
`

const HistoryHead = styled.div`
	height: 17%;
	background-color: #f8b500;
	padding: 3px 5px;
`
const Date = styled.div`
	color: white;
	font-size: small;
`
const Title = styled.div`
	color: white;
	font-size: small;
	font-weight: bold;
`

const HistoryBody = styled.div`
	height: 83%;
	background-color: #ffedbd;
	padding: 5px;
`
const PictureOne = styled.div`
	height: 100%;
  background-image: url("https://c-lj.gnst.jp/public/article/detail/a/00/00/a0000002/img/ko/a0000002_parts_57b692e981aa0.jpg?20181025165319");
	background-size: cover;
  background-repeat: space;
`

const History = ({location, date, title}) => {
	return(
		<HistoryContainer location={location}>
			<HistoryHead>
				<Date>{date}</Date>
				<Title>{title}</Title>
			</HistoryHead>
			<HistoryBody>
				<PictureOne />
			</HistoryBody>
		</HistoryContainer>
	);
}

export default History;