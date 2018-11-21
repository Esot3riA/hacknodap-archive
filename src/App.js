import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header';
import GridTable from './components/GridTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <GridTable />
      </div>
    );
  }
}

export default App;
