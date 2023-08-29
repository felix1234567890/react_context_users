import React from "react";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import AppContext from "./context";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { createRoot } from "react-dom/client";

const domNode = document.getElementById("root");
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
if (!domNode) throw new Error("Failed to find the root element");
const root = createRoot(domNode);
root.render(
  <I18nextProvider i18n={i18n}>
    <AppContext>
      <App />
    </AppContext>
  </I18nextProvider>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
