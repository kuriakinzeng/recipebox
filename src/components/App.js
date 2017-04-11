import React, { Component } from 'react';
import '../../style/App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
}

export default App;
