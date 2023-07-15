import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import { Layout } from './layout';
import { BrowserRouter } from 'react-router-dom';
import './tailwind.css';

const lifeCycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: () => {
    return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  },
  errorBoundary() {
    return <span data-error-mfe-layout="hasError" />;
  },
});

export const { bootstrap, mount, unmount } = lifeCycles;
