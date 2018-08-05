import { combineReducers } from "redux";
import gameReducers from "./gameReducers";

export default combineReducers({
  game: gameReducers
});
