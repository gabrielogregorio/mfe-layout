/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import { Layout } from './layout';
import { BrowserRouter } from 'react-router-dom';
import './tailwind.css';
import { AppProps } from 'single-spa';
import { ID_PROJECT_TO_TAILWIND_CONFIG } from '../config';

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
  errorBoundary(err: Error, errInfo: React.ErrorInfo, props: AppProps) {
    console.log('mfe-layout-report-error', JSON.stringify(err));
    console.log('mfe-layout-report-errInfo', JSON.stringify(errInfo));
    console.log('mfe-layout-report-props', JSON.stringify(props));

    return (
      <div
        data-error-mfe-layout="hasError"
        id={ID_PROJECT_TO_TAILWIND_CONFIG}
        className="text-white bg-red-500 font-medium font-sans">
        Erro ao carregar microfrontend
      </div>
    );
  },
});

export const { bootstrap, mount, unmount } = lifeCycles;
