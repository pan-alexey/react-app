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
          <BaseWidget componentName={'Counter'} />
          <BaseWidget componentName={'Components'} />
          <BaseWidget componentName={'MockComponent'} />
        </div>
        <div>
          PROPS
          {JSON.stringify(this.props.data)}
        </div>
      </>
    );
  }
}

export default App;
