import { START_TRACKER } from "../actionTypes";

const initialState = 0;

export const tick = (state = initialState, action) => {
  switch (action.type) {
    case START_TRACKER:
      return action.ts;
    default:
      return state;
  }
};
