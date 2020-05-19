import { hot } from 'react-hot-loader/root';
import React, { Component } from 'react';
import Components from './components/Components';
import MockComponent from './components/MockComponent';
import './sass/main.scss';


const Comp: {[key: string]: React.ElementType} = {
    _component: Components,
};

const block = (prop: any) => {
    return React.createElement(Comp['_component'], {...prop});
}

class App extends Component {
    render() {
        var rows = [];
        for (var i = 0; i < 1000; i++) {
            rows.push(<MockComponent key={i} />);
        } 
        return (
            <div className="app">
                {block('foo')}
                {block('foo')}
                <input ></input>
                {rows}
            </div>
        );
    }
}

export default hot(App);
