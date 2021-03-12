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

export const startTracker = (id) => ({
  type: START_TRACKER,
  id,
});

// --- action tick

export const startTick = () => ({
  type: START_TICK,
  ts: Date.now(),
});
