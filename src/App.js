import React, { Component } from 'react';
import './App.css';

import Benchmark from './benchmarks'

class App extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Benchmark />
        </React.Fragment>
      </div>
    );
  }
}

export default App;
