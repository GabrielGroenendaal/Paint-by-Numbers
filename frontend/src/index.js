import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import configureStore from "./store/store.js";

import jwt_decode from "jwt-decode";

import { setAuthToken } from "./util/session_api_util";
import Root from "./root.js";
import { logoutCurrentUser } from "./actions/session_actions";


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decodedUser = jwt_decode(localStorage.jwtToken);
    const preloadedState = {
      session: { isAuthenticated: true, user: decodedUser },
      // entities:{
      //   puzzles: localStorage.getItem(decodedUser.id.puzzles)
      // }
    };
    store = configureStore(preloadedState);

    const currentTime = Date.now() / 1000;

    if (decodedUser.exp < currentTime) {
      store.dispatch(logoutCurrentUser());
      //window.location.href = "/login";
    }
  } else {
    store = configureStore({});
  }
  window.getState = store.getState();
  // const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, document.getElementById('root'));
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
