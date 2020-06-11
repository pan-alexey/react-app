/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Component } from 'react';
import MockComponent from './MockComponent';
import styles from '~src/sass/main.module.scss';
//import { createStore } from 'redux';
import { connect } from 'react-redux';

class Components extends Component {
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
    console.log(this.props);
    return (
      <div className={styles.app}>
        <h1>{this.state.count}</h1>
        <h1>{JSON.stringify(this.props)}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <input value={this.state.count} onChange={this.handleChange}></input>
        <MockComponent />
      </div>
    );
  }
}

export default connect(
  (state) => ({
    reduxStore: state,
  }),
  (dispatch) => ({}),
)(Components);
