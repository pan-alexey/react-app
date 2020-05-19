import React, { Component } from 'react';

import styles from './main.module.scss';

const date = new Date();
const str: string = ` 2020-05-18T21:08:43.306Z `;
class Components extends Component {
    render() {
      const ceil = []
      for (var i = 0; i < 100; i++) {
        ceil.push(<span className={styles.span} key={i}>{i}</span>);
      } 

        return (
            <div className={styles.div}>
              {ceil}
            </div>
        );
    }
}

export default Components;
