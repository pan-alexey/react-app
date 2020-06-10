/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Component } from 'react';

import styles from '~src/sass/main.module.scss';

class Components extends Component {
  render() {
    const ceil = [];
    for (let i = 0; i < 100; i++) {
      ceil.push(
        <span
          key={i}
          onClick={function () {
            alert('клик');
          }}
        >
          {i}
        </span>,
      );
    }

    return <div className={styles.div}>{ceil}</div>;
  }
}

export default Components;
