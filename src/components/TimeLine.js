import React, { Component } from 'react';
import './TimeLine.scss';

class TimeLine extends Component {
  render() {
    return(
      <div className="timeline-wrap">
        <div className="timeline">
          <div className="history-container top">
            <div className="history">blahblah</div>
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
