import { SHOW_EDIT, HIDE_EDIT } from "../actions";

const INITIAL_STATE = "HIDE";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_EDIT:
      return "SHOW";

    case HIDE_EDIT:
      return "HIDE";
    default:
      return state;
  }
};
