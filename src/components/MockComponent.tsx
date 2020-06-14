/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
// import styles from '~src/sass/mock.module.scss';

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

    throw new Error('some error');

    return (
      <div>
        {/* <div className={styles.div}>{ceil}</div> */}
        <p>
          <div></div>
          Lorem ipsum vitae massa ut adipiscing nam cursus donec fusce eget pharetra&nbsp;&mdash; diam. Massa tempus et
          proin fusce pharetra congue sit, nibh sagittis, leo. Enim leo in fusce nulla lorem eros maecenas justo morbi
          urna eget fusce eros odio sit maecenas. Morbi sit sagittis at adipiscing, justo leo molestie
          magna&nbsp;&mdash; molestie sapien risus adipiscing nec amet, vitae...
        </p>
      </div>
    );
  }
}

// Hot becouse Components is lazy
export default hot(Components);
