/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from '~src/sass/mock.module.scss';

class Components extends Component {
  render() {
    return (
      <div className={styles.div}>
        <p>
          <b>{JSON.stringify(this.props)}</b>
          Lorem ipsum vitae massa ut adipiscing nam cursus donec fusce eget pharetra&nbsp;&mdash; diam. Massa tempus et
          proin fusce pharetra congue sit, nibh sagittis, leo. Enim leo in fusce nulla lorem eros maecenas justo morbi
          urna eget fusce eros odio sit maecenas. Morbi sit sagittis at adipiscing, justo leo molestie
          magna&nbsp;&mdash; molestie sapien risus adipiscing nec amet, vitae...
        </p>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    reduxStore: state,
  }),
  (dispatch) => ({}),
)(Components);
