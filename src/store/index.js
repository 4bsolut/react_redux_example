import { createStore, combineReducers } from "redux";
import color_reducer from "./color/reducer";

const reducers = combineReducers({
  color_reducer
});
const store = createStore(reducers);
export default store;
