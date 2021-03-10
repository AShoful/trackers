import { ADD_TRACKER, DELETE_TRACKER, STOP_TRACKER } from "../actionTypes";

const initialState = [];

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRACKER:
      return [...state, action.payload];
    case STOP_TRACKER:
      return [...state, action.id];
    case DELETE_TRACKER:
      return [...state, action.id];
    default:
      return state;
  }
};
