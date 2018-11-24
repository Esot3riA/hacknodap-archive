import React, { Component } from 'react';
import './GridTable.scss';
import TimeLine from './TimeLine';

class GridTable extends Component {
  
  render() {
    return (
      <div className="grid-table">
        <div className="grid">
          <TimeLine />
        </div>
      </div>
    );
  }
  
}

export default GridTable;
