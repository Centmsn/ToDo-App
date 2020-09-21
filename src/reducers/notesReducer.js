const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE":
      return [...state, action.payload];

    case "DELETE":
      return [...state].filter((el) => el.id != action.payload);
    default:
      return state;
  }
};
