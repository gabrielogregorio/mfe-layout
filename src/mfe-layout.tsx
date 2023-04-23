import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { Layout } from "./layout";
import { BrowserRouter } from "react-router-dom";
import "./tailwind.css";

const lifeCycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: (props: any) => {
    console.log(props.singleSpa);
    return (
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    );
  },
  errorBoundary() {
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifeCycles;
