import React from 'react';
import ReactDOM from 'react-dom';
import ErrorBoundary from './shared/error/error-boundary';
import AppComponent from './app';

const rootEl = document.getElementById('root');

const render = Component =>
  // eslint-disable-next-line react/no-render-return-value
  ReactDOM.render(
    <ErrorBoundary>
          <Component />
    </ErrorBoundary>,
    rootEl
  );

render(AppComponent);
