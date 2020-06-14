import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

class AsyncWidget extends Component {
  render() {
    return <div>Async Widgets</div>;
  }
}

// Hot becouse Components is lazy
export default hot(AsyncWidget);
