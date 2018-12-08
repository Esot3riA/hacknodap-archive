import React, { Component } from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import History from './History';
import './TimeLine.scss';

class TimeLine extends Component {
  render() {
    return(
      <HorizontalScroll>
			<div className="timeline-wrapper">
				<div className="timeline">
					<History
						location="top"
						date="2018.11.01"
						title="핵노답 아카이브 개발 시작" />
					<History
						location="bottom"
						date="2018.11.09"
						title="핵노답 아카이브 개발 중" />
				</div>
			</div>
      </HorizontalScroll>
    );
  }
}

export default TimeLine;
