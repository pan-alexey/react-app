/* eslint-disable @typescript-eslint/no-explicit-any */

// store - redux store
// data - application date
import React from 'react';
import App from './App';
import { Provider } from 'react-redux';

const entry = (props: { store: any; data: any }) => {
  const { store, data } = props;

  return (
    <Provider store={store} key="provider">
      <App data={data} />
    </Provider>
  );
};

export default entry;
