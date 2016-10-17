import React, { Component } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import Nav from './component/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav history={this.props.history}/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
