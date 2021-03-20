import {
  ADD_TRACKER,
  DELETE_TRACKER,
  STOP_TRACKER,
  START_TRACKER,
  START_TICK,
} from "../actionTypes";

// --- action trackers

export const addTracker = (data) => ({
  type: ADD_TRACKER,
  data,
});

export const deleteTracker = (id) => ({
  type: DELETE_TRACKER,
  id,
});

export const stopTracker = (id) => ({
  type: STOP_TRACKER,
  id,
});

export const startTracker = (id, time) => ({
  type: START_TRACKER,
  id,
  time,
});

// --- action tick

export const startTick = (id, tick) => ({
  type: START_TICK,
  id,
  tick,
});
