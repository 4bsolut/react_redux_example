import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
const Application = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Application />, document.getElementById("root"));
