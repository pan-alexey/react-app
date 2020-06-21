/* eslint-disable react/prop-types */
import React from 'react';

export const ErrorElelment = () => {
  return <div>Что-то пошло не так.</div>;
};

export class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorElelment />;
    }

    return this.props.children;
  }
}
