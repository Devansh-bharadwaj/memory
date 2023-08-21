import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import App from "./App";
import { createRoot } from "react-dom/client";

// Check if the Redux DevTools Extension is available
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

const root = document.getElementById("root");
createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
