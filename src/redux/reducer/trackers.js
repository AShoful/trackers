import {
  ADD_TRACKER,
  DELETE_TRACKER,
  STOP_TRACKER,
  START_TRACKER,
  START_TICK,
} from "../actionTypes";
import { load } from "redux-localstorage-simple";

const savedTrackers = load({ namespace: "trackers-list" });

const initialState =
  savedTrackers && savedTrackers.trackers ? savedTrackers.trackers : [];

export const trackers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRACKER:
      return [...state, action.data];

    case STOP_TRACKER: {
      const st = state.filter((item) => item.id === action.id)[0];
      st.isStarted = false;
      return [...state];
    }

    case START_TRACKER: {
      const st = state.filter((item) => item.id === action.id)[0];
      st.start = Date.now() - st.time;
      st.isStarted = true;
      return [...state];
    }

    case START_TICK: {
      const st = state.filter((item) => item.id === action.id)[0];
      st.time = action.tick;
      return [...state];
    }

    case DELETE_TRACKER:
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
};
