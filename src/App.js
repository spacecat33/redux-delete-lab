import React, { Component } from 'react';
import BandsContainer from './containers/BandsContainer';
// import Band from './components/Band';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BandsContainer />
      </div>
    );
  }
};

export default App;
