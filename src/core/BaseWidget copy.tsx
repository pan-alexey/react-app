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
import ErrorBoundary from './ErrorBoundary';

import MockComponent from '~src/components/MockComponent';
import Component from '~src/components/Components';

const Components: { [key: string]: React.ElementType } = {
  MockComponent,
  Component,
};

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
      console.log(this.props);
      const Component = Components[WidgetName];
      return (
        <ErrorBoundary key="base">
          <Component {...this.props} />
        </ErrorBoundary>
      );
    }
  };

  return Widget;
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
