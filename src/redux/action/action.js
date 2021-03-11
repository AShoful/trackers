import {
  ADD_TRACKER,
  DELETE_TRACKER,
  STOP_TRACKER,
  START_TRACKER,
} from "../actionTypes";

export const addTracker = (data) => ({
  type: ADD_TRACKER,
  data,
});

export const deleteTracker = (id) => ({
  type: DELETE_TRACKER,
  id,
});

export const startClock = () => ({
  type: START_TRACKER,
  ts: Date.now(),
});

export const stopTracker = (id) => ({
  type: STOP_TRACKER,
});
