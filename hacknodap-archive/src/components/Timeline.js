import React, { Component } from 'react';
import Line from './Line';
import History from './History';
import styled from 'styled-components';

const LineContainer = styled.div`
	display: flex;
  flex-direction: column;
  justify-content: center;
	height: 100%;
`

const HistoryContainer = styled.div`
	position: absolute;
`

class Timeline extends Component {
	render() {
		return(
			<React.Fragment>
				<LineContainer>
					<Line />
					<HistoryContainer>
						<History
							location="top"
							date="2018.11.01"
							title="핵노답 아카이브 개발 시작" />
						<History
							location="bottom"
							date="2018.11.09"
							title="핵노답 아카이브 개발 중" />
					</HistoryContainer>
				</LineContainer>
			</React.Fragment>
		);
	}
}

export default Timeline;