import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import Components from './components/Components';
import './sass/main.scss';

class App extends Component {
    render() {
        return (
            <div className="app">
              <Components />
              <input ></input>
            </div>
        );
    }
}

export default hot(App);