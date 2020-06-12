/* eslint-disable @typescript-eslint/no-useless-constructor */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Component, Suspense } from 'react';
import styles from '~src/sass/main.module.scss';
import { connect } from 'react-redux';
const MockComponent = React.lazy(() => import('./MockComponent'));
class Components extends Component<unknown> {
  state = {
    canRender: false,
  };

  componentDidMount() {
    this.setState({ canRender: true });
  }

  render() {
    const { canRender } = this.state;
    return canRender ? (
      <div className={styles.app}>
        <Suspense fallback={<div>Загрузка...</div>}>
          <MockComponent />
          <MockComponent />
          <MockComponent />
          <MockComponent />
        </Suspense>
      </div>
    ) : null;
  }
}

export default connect(
  (state) => ({
    reduxStore: state,
  }),
  (dispatch) => ({}),
)(Components);
