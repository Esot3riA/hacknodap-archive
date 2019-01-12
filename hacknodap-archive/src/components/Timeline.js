import React, { Component } from 'react';
import Line from './Line';
import HistoryList from './HistoryList';
import styled from 'styled-components';

const TimelineDiv = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: center;
	height: 100%;
`;

class Timeline extends Component {
	
	static defaultProps = {
		histories: [
			{
					id: 1,
					location: 'top',
					date: '2018.11.01',
					title: '핵노답 아카이브 개발 시작',
				},
				{
					id: 2,
					location: 'bottom',
					date: '2018.11.09',
					title: '핵노답 아카이브 개발 중',
			}
		]
	};
	
	render() {
		const { histories } = this.props;
		return(
			<TimelineDiv>
				<Line />
				<HistoryList
					histories={histories}/>
			</TimelineDiv>
		);
	}
}

export default Timeline;