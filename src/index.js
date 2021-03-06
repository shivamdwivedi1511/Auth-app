import React from "react";
import ReactDOM from "react-dom";
import { Router, BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import "antd/dist/antd.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
  
serviceWorker.unregister();
