import { SWITCH_MODE, SWITCH_SIZE } from "../actions";

const INITIAL_STATE = { darkmode: false, fontSize: "normal" };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SWITCH_MODE:
      return { ...state, darkmode: action.payload };

    case SWITCH_SIZE:
      return { ...state, fontSize: action.payload };
    default:
      return state;
  }
};
