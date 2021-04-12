import './app.scss';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Header from 'app/shared/layout/header/header';
import ErrorBoundary from 'app/shared/error/error-boundary';
import AppRoutes from 'app/routes';
import Footer from 'app/shared/layout/footer/footer';

const baseHref = document.querySelector('base').getAttribute('href').replace(/\/$/, '');

export const App = () => {
  return (
    <Router basename={baseHref}>
      <ErrorBoundary>
        <Header />
        <AppRoutes />
      </ErrorBoundary>
      <Footer />
    </Router>
  );
};

export default hot(module)(App);
