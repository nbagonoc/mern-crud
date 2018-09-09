import { combineReducers } from "redux";
import itemReducers from "./itemReducers";
import errorReducers from "./errorReducers";
import loadingReducers from "./loadingReducers";

export default combineReducers({
  item: itemReducers,
  errors: errorReducers,
  loading: loadingReducers
});
