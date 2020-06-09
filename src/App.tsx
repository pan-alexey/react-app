import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import Components from '~src/components/Components';

class App extends Component {
  render() {
    return <Components />;
  }
}

export default hot(App);
