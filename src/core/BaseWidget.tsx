/* eslint-disable react/prop-types */
// Base widget:
// Error Capturing
// Rendering stats

// для сервера https://github.com/zekchan/react-ssr-error-boundary/blob/master/src/server.js
import React from 'react';

import { renderToStaticMarkup } from 'react-dom/server';

import MockComponent from '~src/components/MockComponent';

const server = typeof window === 'undefined' && renderToStaticMarkup;

const Components: { [key: string]: React.ElementType } = {
  MockComponent,
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
    try {
      console.log(this.props.children);
      const html = renderToStaticMarkup(<>{this.props.children}</>);

      console.log(html);
    } catch (error) {
      console.log('**error**', error);
    }
    return <div>Проиошла ошибка на сервере</div>;
  }
}

const WidgetWrapper = (WidgetName?: string) => {
  return class Widget extends React.Component {
    state = {
      hasError: false,
    };

    componentDidMount() {
      console.log('componentDidMount');
    }
    render() {
      const WidgetName = 'MockComponent';
      const Component = Components[WidgetName];
      return (
        <ErrorBoundary>
          <Component {...this.props} />
        </ErrorBoundary>
      );
    }
  };
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
