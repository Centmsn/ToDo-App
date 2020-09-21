const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SWITCH_MODE":
      return { ...state };

    case "SWITCH_SIZE":
      return { ...state };
    default:
      return state;
  }
};
