import ReactDOM from 'react-dom';
import React from 'react';

import App from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  rootElement.childNodes.length ? ReactDOM.hydrate(<App />, rootElement) : ReactDOM.render(<App />, rootElement);
}
