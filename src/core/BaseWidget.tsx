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
import { connect } from 'react-redux';

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

class Widget extends React.Component<IWidget> {
  render() {
    const props = this.props.store;
    const { componentName } = this.props;

    const WidgetComponent: React.ElementType = components[componentName];

    if (WidgetComponent) {
      return <WidgetComponent {...props} />;
    }
    return null;
  }
}

export default connect((state) => ({
  store: state,
}))(Widget);
