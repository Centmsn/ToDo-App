const INITIAL_STATE = { darkmode: false, fontSize: "normal" };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SWITCH_MODE":
      return { ...state, darkmode: !state.darkmode };

    case "SWITCH_SIZE":
      return { ...state, fontSize: action.payload };
    default:
      return state;
  }
};
