import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "unistore/react";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";
import App from "./containers/App";

const rootEl = document.getElementById("root");
const render = Component =>
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    </Provider>,
    rootEl
  );

console.info(`${process.env.APP_NAME} running in ${process.env.NODE_ENV} mode.`);
if (process.env.NODE_ENV === "production") {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker
        .register("./service-worker.js")
        .then(registration => {
          console.log("[SW] service Worker is registered", registration.scope);
        })
        .catch(err => {
          console.error("[SW] service Worker registration failed:", err);
        });
    });
  }
}

render(App);
