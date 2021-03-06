import React, { Component, Suspense } from 'react';
import { connect } from 'react-redux';

class Components extends Component<unknown> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  constructor(props: unknown) {
    super(props);
  }

  AsyncComponent: any = null;
  benchmark: {
    start?: number;
    didMount?: number;
    afterRender?: number;
  } = {};

  state = {
    canRender: false,
  };

  componentDidMount() {
    this.AsyncComponent = React.lazy(() => import('./MockComponent'));
    this.setState((state) => state);
    this.benchmark['didMount'] = Date.now();
  }

  render() {
    // throw new Error('q');
    const result = this.AsyncComponent ? (
      <>
        <Suspense fallback={<div>Загрузка...</div>}>
          <this.AsyncComponent />
        </Suspense>
      </>
    ) : null;

    this.benchmark['afterRender'] = Date.now();
    return result;
  }
}

export default connect(
  (state) => ({
    reduxStore: state,
  }),
  (dispatch) => ({}),
)(Components);
