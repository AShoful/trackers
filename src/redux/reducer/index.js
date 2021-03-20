import { combineReducers } from "redux";
import { trackers } from "./trackers";

export const combinedReducer = combineReducers({
  trackers,
});
