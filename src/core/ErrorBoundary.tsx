/* eslint-disable react/prop-types */
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import reducer from '~src/store';

const server = typeof window === 'undefined' && renderToStaticMarkup;

//------------------------------------------//
// Todo client ErrorBoundary
// REDUX STORE
class ErrorBoundary extends React.Component {
  render() {
    if (server) {
      try {
        console.log(this.props);
        // Попытка рендеринга компонента
        const store = createStore(reducer, {
          str: new Date().toUTCString(),
          color: 'blue',
        });
        const __html = renderToStaticMarkup(
          <Provider store={store} key="provider">
            {this.props.children}
          </Provider>,
        );
        return <div dangerouslySetInnerHTML={{ __html }} />;
      } catch (error) {
        console.log(error);
        return null;
      }
    }

    return <div>{this.props.children}</div>;
  }
}

export default ErrorBoundary;
