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

export const stopTracker = (id, currentTrackValue) => ({
  type: STOP_TRACKER,
  id,
  currentTrackValue,
});

export const startTracker = (id, currentTrackValue) => ({
  type: START_TRACKER,
  id,
});

// --- action tick

export const startClock = () => ({
  type: START_TICK,
  ts: Date.now(),
});
