import { MOVE_TO_REMOVED } from "../actions";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVE_TO_REMOVED:
      return [...state, action.payload];
    default:
      return state;
  }
};
