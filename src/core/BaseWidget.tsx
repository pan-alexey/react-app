/* eslint-disable react/prop-types */
// Base widget:
// Error Capturing
// Rendering stats

/*
В случае сервера, виджет рендерится в статичную html разметку, но нужен оверхед
1. подключения стора в виджете и прокидывания его в компонент
2. пытаемся отрисовать разметку. Если все ок, то в виджете рендерим html

*/

// для сервера https://github.com/zekchan/react-ssr-error-boundary/blob/master/src/server.js
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';

import reducer from '~src/store';
import MockComponent from '~src/components/MockComponent';
import Components from '~src/components/Components';

const components: { [key: string]: React.ElementType } = {
  MockComponent,
  Components,
};

export interface IWidget {
  componentName: string;
  store?: any;
}

const isServer = typeof window === 'undefined';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  componentDidCatch() {
    // Customized error handling goes here!
  }

  render() {
    if (this.state.hasError) {
      // Можно отрендерить запасной UI произвольного вида
      return <h1>Что-то пошло не так.</h1>;
    }

    return this.props.children;
  }
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
      console.log(err);
      return <div className="widget"></div>;
    }
  }
}

export default connect((state) => ({
  store: state,
}))(Widget);
