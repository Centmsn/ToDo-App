import { SHOW_NOTES, HIDE_NOTES } from "../actions";

const INITIAL_STATE = "HIDE";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_NOTES:
      return "SHOW";
    case HIDE_NOTES:
      return "HIDE";
    default:
      return state;
  }
};
