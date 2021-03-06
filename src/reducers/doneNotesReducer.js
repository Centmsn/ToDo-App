import { MOVE_TO_DONE } from "../actions";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVE_TO_DONE:
      return [...state, action.payload];
    default:
      return state;
  }
};
