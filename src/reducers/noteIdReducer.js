import { INCREMENT } from "../actions";

const getInitialValue = () => {
  const keys = Object.keys(localStorage);

  const convertedKeys = keys.map((key) => parseInt(key));

  return Math.max(...convertedKeys);
};

const INITIAL_STATE = localStorage.length > 0 ? getInitialValue() + 1 : 0;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
};
