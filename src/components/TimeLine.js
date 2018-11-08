import React, { Component } from 'react';
import './TimeLine.scss';

class TimeLine extends Component {
  render() {
    return(
      <div className="timeline-wrap">
        <div className="timeline">
          <div className="history-container top">
            <div className="head">
                <div className="date">2018.11.01</div>
                <div className="title">핵노답 아카이브 개발 시작</div>
            </div>
            <div className="body">:)</div>
          </div>
          <div className="history-container bottom">
            <div className="history">another blah</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeLine;
