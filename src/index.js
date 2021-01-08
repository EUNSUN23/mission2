import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import { routerMiddleware, connectRouter } from "connected-react-router";
import thunk from "redux-thunk";
import reportWebVitals from "./reportWebVitals";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Add the reducer to your store on the `routing` key

export const history = createBrowserHistory();

const store = createStore(
  combineReducers({
    router: connectRouter(history),
    // reducer: pagination,
  }), // root reducer with router state
  composeEnhancers(applyMiddleware(routerMiddleware(history), thunk))
);

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(
  <React.StrictMode>{app}</React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
