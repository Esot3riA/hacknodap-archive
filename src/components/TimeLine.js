import React, { Component } from 'react';
import './TimeLine.scss';

class TimeLine extends Component {
  render() {
    return(
      <div className="timeline">
        <div className="backbone-wrap">
          <div className="backbone">
            <div className="historydot"></div>
            <div className="historydot"></div>
            <div className="historydot"></div>
          </div>
          <div className="backbone-end">
          </div>
        </div>
      </div>
    );
  }
}

export default TimeLine;
