const INITIAL_STATE = "HIDE";

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SHOW-NOTES":
      return "SHOW";
    case "HIDE-NOTES":
      return "HIDE";
    default:
      return state;
  }
};
