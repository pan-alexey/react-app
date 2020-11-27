/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Components extends Component<any> {
  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(props: any) {
    super(props);
  }

  render() {
    return <div>Components</div>;
  }
}

export default connect(
  (state) => ({
    reduxStore: state,
  }),
  (dispatch) => ({}),
)(Components);
