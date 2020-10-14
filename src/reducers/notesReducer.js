import { CREATE, DELETE, EDIT } from "../actions";

const getStorage = () => {
  const initalValue = [];
  const keys = Object.keys(localStorage);

  for (let i = 0; i < keys.length; i++) {
    initalValue.push(JSON.parse(localStorage[keys[i]]));
  }

  return initalValue;
};

const INITIAL_STATE = localStorage.length > 0 ? getStorage() : [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE:
      localStorage.setItem(action.payload.id, JSON.stringify(action.payload));

      return [...state, action.payload];

    case DELETE:
      localStorage.removeItem(action.payload);
      return [...state].filter((el) => el.id !== parseInt(action.payload, 10));

    case EDIT:
      const note = [...state].filter(
        (el) => el.id === parseInt(action.payload.id)
      );

      note[0].title = action.payload.title;
      note[0].desc = action.payload.desc;

      return [...state];

    default:
      return state;
  }
};
