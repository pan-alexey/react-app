import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import Components from '~src/components/Components';
import './sass/app.scss';

class App extends Component {
  state = {
    count: 0,
  };

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
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <input value={this.state.count} onChange={this.handleChange}></input>
        <Components />
      </div>
    );
  }
}

export default hot(App);
