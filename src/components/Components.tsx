/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';

class Components extends Component<unknown> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  AsyncComponent: any = null;

  state = {
    canRender: false,
  };

  componentDidMount() {
    this.AsyncComponent = React.lazy(() => import('./MockComponent'));
    this.setState((state) => state);
  }

  render() {
    return this.AsyncComponent ? (
      // fallback работает и на сервере;
      <Suspense fallback={<div>Загрузка...</div>}>
        <this.AsyncComponent />
      </Suspense>
    ) : null;
  }
}

export default connect(
  (state) => ({
    reduxStore: state,
  }),
  (dispatch) => ({}),
)(Components);
