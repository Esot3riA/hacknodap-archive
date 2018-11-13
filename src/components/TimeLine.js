import React, { Component } from 'react';
import HorizontalScroll from 'react-scroll-horizontal';
import './TimeLine.scss';

class TimeLine extends Component {
  render() {
    return(
      <HorizontalScroll>
        <div className="timeline-wrapper">
        <div className="timeline">
          <div className="history-container top">
            <div className="history-head">
                <div className="date">2018.11.01</div>
                <div className="title">핵노답 아카이브 개발 시작</div>
            </div>
            <div className="history-body">
              <div className="picture-1"></div>
            </div>
          </div>
          <div className="history-container bottom">
            <div className="history-head">
              <div className="date">2018.11.09</div>
              <div className="title">핵노답 아카이브 개발 중</div>
            </div>
            <div className="history-body">
              <div className="picture-2"></div>
            </div>
          </div>
        </div>
        </div>
      </HorizontalScroll>
    );
  }
}

export default TimeLine;
