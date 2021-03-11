import {
  ADD_TRACKER,
  DELETE_TRACKER,
  STOP_TRACKER,
  START_TRACKER,
} from "../actionTypes";

const initialState = [];

export const trackers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRACKER:
      return [...state, action.data];

    case STOP_TRACKER: {
      const st = state.filter((item) => item.id === action.id)[0];
      st.currentTrackValue = action.currentTrackValue;
      st.isStarted = false;
      return [...state];
    }

    case START_TRACKER: {
      const st = state.filter((item) => item.id === action.id)[0];
      st.timeStart = Date.now();
      st.isStarted = true;
      return [...state];
    }

    case DELETE_TRACKER:
      return state.filter((item) => item.id !== action.id);

    default:
      return state;
  }
};
