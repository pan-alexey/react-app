import React, { Component } from 'react';
import BaseWidget from '~src/core/BaseWidget';

class App extends Component<unknown> {
  state = {
    count: 0,
  };

  benchmark: {
    start: number;
    didMount?: number;
    afterRender?: number;
  } = {
    start: 0,
    afterRender: 0,
  };

  constructor(prop: unknown) {
    super(prop);
    this.benchmark['start'] = Date.now();
  }

  componentDidUpdate() {
    this.benchmark['start'] = Date.now();
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      count: parseInt(event.target.value),
    });
  };
  render() {
    try {
      const result = (
        <>
          {/* {BaseWidget('MockComponent')}
          {BaseWidget('Component')} */}
          <h1>Пример react</h1>
          <p>{this.state.count}</p>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          {/* <input value={this.state.count} onChange={this.handleChange}></input> */}
          <br />
          <div>
            <div>MockComponent</div>
            <BaseWidget componentName={'MockComponent'} />
          </div>
          <div>
            <div>Components</div>
            <BaseWidget componentName={'Components'} />
          </div>
          <br />
          <div>
            <div>MockComponent</div>
            <BaseWidget componentName={'MockComponent'} />
          </div>
        </>
      );

      return result;
    } catch (error) {
      console.log(error);
    }
    return <div>500</div>;
  }
}

// export default App;
export default App;
