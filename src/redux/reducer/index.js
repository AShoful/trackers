import { combineReducers } from "redux";
import { trackers } from "./trackers";
import { tick } from "./tick";

export const combinedReducer = combineReducers({
  trackers,
  tick,
});
