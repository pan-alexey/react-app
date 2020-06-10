import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import Components from '~src/components/Components';

class App extends Component {
  render() {
    return (
      <div>
        React
        <Components />
      </div>
    );
  }
}

export default hot(App);
