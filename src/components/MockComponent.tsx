/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Component } from 'react';

import styles from '~src/sass/main.module.scss';

class Components extends Component {
  render() {
    const ceil = [];
    for (let i = 0; i < 10; i++) {
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

    return (
      <div>
        <div className={styles.div}>{ceil}</div>
      </div>
    );
  }
}

export default Components;
