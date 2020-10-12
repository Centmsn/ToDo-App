import { SHOW_EDIT, HIDE_EDIT } from "../actions";

const INITIAL_STATE = { visibility: "HIDE" };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_EDIT:
      return {
        visibility: "SHOW",
        id: action.payload.id,
        title: action.payload.title,
        desc: action.payload.desc,
      };

    case HIDE_EDIT:
      return { visibility: "HIDE" };
    default:
      return state;
  }
};
