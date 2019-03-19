import React from "react";
import ReactDOM from "react-dom"; // menyusun parent Provider dan child App sebagai pohon
import { Provider } from "react-redux"; // Ini component yang menghubungkan aplikasi react dengan redux
import { createStore, applyMiddleware } from "redux"; // Ini function yang membuat redux store
import thunk from "redux-thunk";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./components/App.js";
import reducers from "./reducers";

const store = createStore(reducers, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
