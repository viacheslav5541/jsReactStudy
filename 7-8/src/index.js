import React from "react";
import ReactDOM from "react-dom";
import App from './Components/App'
import { Provider } from "mobx-react";
import commonStore from '../stores/commonStore';
const stores = {
  commonStore,
};


ReactDOM.render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);


