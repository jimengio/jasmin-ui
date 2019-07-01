import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, HashRouter } from "react-router-dom";
import Dashboard from "./dashboard";
import LocaleProvider from "@components/locale-provider";

import "antd/dist/antd.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./main.css";

class ExampleApp extends React.Component<any, any> {
  render() {
    return (
      <LocaleProvider language={"zh_CN"}>
        <HashRouter>
          <Route path="/" render={p => <Dashboard match={p.match} />} />
        </HashRouter>
      </LocaleProvider>
    );
  }
}

function renderExampleApp() {
  ReactDOM.render(<ExampleApp />, document.querySelector("#app_container"));
}

window.onload = renderExampleApp;

declare const module: any;

if (module.hot) {
  module.hot.accept(["./dashboard"], () => {
    renderExampleApp();
  });
}
