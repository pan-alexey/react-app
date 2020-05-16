import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import Components from './components/Components';

class App extends Component {
    render() {
        return (
            <div>
              <Components />
              <input ></input>
            </div>
        );
    }
}

//export default App;
export default hot(App);