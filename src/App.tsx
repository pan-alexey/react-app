import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import Components from './components/Components';
import './sass/main.scss';


const Comp: {
    foo: React.ElementType
} = {
    foo: Components,
};


const block = (prop: any) => {
    // component does exist
    return React.createElement(Comp['foo'], {...prop});
}

class App extends Component {

    TagName = 'Components';

    render() {
        return (
            <div className="app">
              {block('foo')}
              {block('foo')}
              <input ></input>
            </div>
        );
    }
}

export default hot(App);