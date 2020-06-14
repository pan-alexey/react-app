import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import Components from '~src/components/Components';
import MockComponent from '~src/components/MockComponent';
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
      const components = [];
      for (let i = 0; i < this.state.count; i++) {
        components.push(<MockComponent />);
      }
      const result = (
        <>
          {BaseWidget('MockComponent')}
          <h1>Пример react</h1>
          <p>{this.state.count}</p>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
          {/* <input value={this.state.count} onChange={this.handleChange}></input> */}
          <br />
          {/* {components.map((component, index) => (
            <React.Fragment key={index}>******{component}</React.Fragment>
          ))} */}
          {/* <MockComponent /> */}
          {/* <Components /> */}
        </>
      );

      return result;
    } catch (error) {
      console.log(error);
    }

    this.benchmark['afterRender'] = Date.now();
    console.log(this.benchmark['afterRender'] - this.benchmark['start'] + 'ms');
    return <div>500</div>;
  }
}

export default hot(App);
