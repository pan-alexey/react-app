import React, { Component } from 'react';

import styles from '~src/sass/main.module.scss';

class Components extends Component {
  render() {
    const ceil = [];
    for (let i = 0; i < 10000; i++) {
      ceil.push(
        <span
          className={styles.span}
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
