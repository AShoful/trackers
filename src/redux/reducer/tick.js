import { START_TICK } from "../actionTypes";

const initialState = 0;

export const tick = (state = initialState, action) => {
  switch (action.type) {
    case START_TICK:
      return action.ts;
    default:
      return state;
  }
};
