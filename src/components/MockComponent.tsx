/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '~src/sass/main.module.scss';

class Components extends Component {
  render() {
    return (
      <>
        <div>
          <pre>{JSON.stringify(this.props)}</pre>
        </div>
        <div className={styles.app}>
          Lorem ipsum vitae massa ut adipiscing nam cursus donec fusce eget pharetra&nbsp;&mdash; diam. Massa tempus et
          proin fusce pharetra congue sit, nibh sagittis, leo. Enim leo in fusce nulla lorem eros maecenas justo morbi
          urna eget fusce eros odio sit maecenas. Morbi sit sagittis at adipiscing, justo leo molestie
          magna&nbsp;&mdash; molestie sapien risus adipiscing nec amet, vitae...
        </div>
      </>
    );
  }
}

export default connect(
  (state) => ({
    reduxStore: state,
  }),
  (dispatch) => ({}),
)(Components);
