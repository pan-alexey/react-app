import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import reducer from '~src/store';
// import MockComponent from '~src/components/MockComponent';
import Components from '~src/components/Components';

import { ErrorBoundary, ErrorElelment } from './ErrorBoundary';

const isServer = typeof window === 'undefined';

const components: { [key: string]: React.ElementType } = {
  // MockComponent: require('~src/components/MockComponent').default,
  Components,
};

export interface IWidget {
  componentName: string;
  store?: any; // this redux store
}

class Widget extends React.Component<IWidget> {
  render() {
    const props = { a: 'a', b: 'b' };
    const { componentName } = this.props;
    const WidgetComponent: React.ElementType = components[componentName];

    if (!WidgetComponent) return null;

    if (!isServer) {
      return (
        <div className="widget">
          <ErrorBoundary>
            <WidgetComponent {...props} />
          </ErrorBoundary>
        </div>
      );
    }

    const reduxState = this.props.store || {};
    const store = createStore(reducer, reduxState);
    try {
      const __html = renderToStaticMarkup(
        <Provider store={store} key="provider">
          <WidgetComponent {...props} />
        </Provider>,
      );

      return <div className="widget" dangerouslySetInnerHTML={{ __html }} />;
    } catch (err) {
      return (
        <div className="widget">
          <ErrorElelment />
        </div>
      );
    }
  }
}

const WidgetEntry = isServer
  ? connect((state) => ({
      store: state,
    }))(Widget)
  : Widget;

export default WidgetEntry;
