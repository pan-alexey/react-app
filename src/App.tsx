/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component } from 'react';
import BaseWidget from './core/BaseWidget';
class App extends Component<{ data: any }> {
  render() {
    return (
      <>
        <h1>React</h1>
        <div>
          BaseWidget (Components)
          <BaseWidget componentName={'Components'} />
        </div>
        <div>
          PROPS
          {JSON.stringify(this.props)}
        </div>
      </>
    );
  }
}

export default App;
