// Base widget:
// Error Capturing
// Rendering stats
import React from 'react';

import MockComponent from '~src/components/MockComponent';

const Components: { [key: string]: React.ElementType } = {
  MockComponent,
};

class ErrorBoundary extends React.Component {
  state = {
    hasError: true,
  };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Fallback UI</div>;
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

const WidgetWrapper = (name: string) => {
  return class Widget extends React.Component {
    state = {
      hasError: false,
    };

    componentDidCatch() {
      // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
      console.log('+++++++++');
      // console.log(error);
      console.log('+++++++++');
    }

    static getDerivedStateFromError() {
      // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
      console.log('+++++++++');
      // console.log(error);
      console.log('+++++++++');
      return { hasError: true };
    }

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
