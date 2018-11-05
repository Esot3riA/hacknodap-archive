import React, { Component } from 'react';
import './TimeLine.scss';

class TimeLine extends Component {
  render() {
    return(
      <div className="timeline">
        <div className="spine-wrap">
          <div className="spine">
            <div className="historydot"></div>
            <div className="historydot"></div>
            <div className="historydot"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default TimeLine;
