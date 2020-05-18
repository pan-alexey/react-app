import React, { Component } from 'react';

import styles from './main.module.scss';

const date = new Date();
const str: string = ` 2020-05-18T21:08:43.306Z `;
class Components extends Component {
    render() {
        return (
            <div className={styles.app}>
              {( new Date()).toUTCString()}
              <input></input>
            </div>
        );
    }
}

export default Components;