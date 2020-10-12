import { CREATE, DELETE, EDIT } from "../actions";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE:
      return [...state, action.payload];

    case DELETE:
      return [...state].filter((el) => el.id !== parseInt(action.payload, 10));

    case EDIT:
      const note = [...state].filter(
        (el) => el.id === parseInt(action.payload.id)
      );
      console.log(note, action.payload);

      note[0].title = action.payload.title;
      note[0].desc = action.payload.desc;

      return [...state];

    default:
      return state;
  }
};
