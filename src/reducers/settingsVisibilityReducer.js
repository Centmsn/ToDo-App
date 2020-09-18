const INITIAL_STATE = "HIDE";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SHOW-SETTINGS":
      return "SHOW";
    case "HIDE-SETTINGS":
      return "HIDE";
    default:
      return state;
  }
};
