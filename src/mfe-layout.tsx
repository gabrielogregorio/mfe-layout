import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { Layout } from "./layout";

const lifeCycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: (props: any) => {
    console.log(props.singleSpa);
    return <Layout />;
  },
  errorBoundary() {
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifeCycles;
