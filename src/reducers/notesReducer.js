import { CREATE, DELETE, EDIT } from "../actions";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE:
      return [...state, action.payload];

    case DELETE:
      return [...state].filter((el) => el.id != action.payload);

    case EDIT:
      const note = [...state][action.payload.index];
      note.title = action.payload.title;
      note.desc = action.payload.desc;

      const newState = [...state].splice(action.payload.index, 1);

      return [...newState, note];
    default:
      return state;
  }
};
