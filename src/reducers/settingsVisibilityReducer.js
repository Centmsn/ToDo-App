import { SHOW_SETTINGS, HIDE_SETTINGS } from "../actions";

const INITIAL_STATE = "HIDE";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_SETTINGS:
      return "SHOW";
    case HIDE_SETTINGS:
      return "HIDE";
    default:
      return state;
  }
};
