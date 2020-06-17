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

import MockComponent from '~src/components/MockComponent';
import Component from '~src/components/Components';

import reducer from '~src/store';

const server = typeof window === 'undefined' && renderToStaticMarkup;

const Components: { [key: string]: React.ElementType } = {
  MockComponent,
  Component,
};

class ErrorBoundary extends React.Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  errMsg() {
    return <div>Проиошла ошибка</div>;
  }

  render() {
    if (server) {
      try {
        // Попытка рендеринга компонента
        const store = createStore(reducer);
        const html = renderToStaticMarkup(
          <Provider store={store} key="provider">
            {this.props.children}
          </Provider>,
        );

        return this.props.children;
      } catch (error) {
        console.log(error);
        return null;
      }
    }

    return this.props.children;
  }
}

const WidgetWrapper = (WidgetName: string) => {
  const Widget = class Widget extends React.Component {
    state = {
      hasError: false,
    };

    componentDidMount() {
      console.log('componentDidMount');
    }
    render() {
      // const WidgetName = 'MockComponent';
      const Component = Components[WidgetName];
      return (
        <ErrorBoundary>
          <Component {...this.props} />
        </ErrorBoundary>
      );
    }
  };

  return Widget;
  // return connect((state) => ({
  //   reduxStore: state,
  // })(Widget)
};

const Widget = (name: string) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const props: any = {
    a: 'a',
    b: 'b',
  };

  const Element = React.createElement(WidgetWrapper(name), { ...props });
  return Element;
};

export default Widget;
