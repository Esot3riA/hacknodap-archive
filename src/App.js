import React, { Component } from 'react';
import MainAppBar from './components/MainAppBar';
import GridTable from './components/GridTable';
import AddButton from './components/AddButton';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainAppBar />
        <GridTable />
        <AddButton />
      </div>
    );
  }
}

export default App;
