export const CREATE = "CREATE";
export const DELETE = "DELETE";
export const EDIT = "EDIT";
export const HIDE_EDIT = "HIDE_EDIT";
export const HIDE_NOTES = "HIDE_NOTES";
export const HIDE_SETTINGS = "HIDE_SETTINGS";
export const INCREMENT = "INCREMENT";
export const MOVE_TO_DONE = "MOVE_TO_DONE";
export const MOVE_TO_REMOVED = "MOVE_TO_REMOVED";
export const SHOW_NOTES = "SHOW_NOTES";
export const SHOW_SETTINGS = "SHOW_SETTINGS";
export const SHOW_EDIT = "SHOW_EDIT";
export const SWITCH_MODE = "SWITCH_MODE";
export const SWITCH_SIZE = "SWITCH_SIZE";

export const showCreateNote = () => {
  return {
    type: SHOW_NOTES,
  };
};

export const hideCreateNote = () => {
  return {
    type: HIDE_NOTES,
  };
};

export const showSettings = () => {
  return {
    type: SHOW_SETTINGS,
  };
};

export const hideSettings = () => {
  return {
    type: HIDE_SETTINGS,
  };
};

export const showEdit = (id) => {
  return {
    type: SHOW_EDIT,
    payload: id,
  };
};

export const hideEdit = () => {
  return {
    type: HIDE_EDIT,
  };
};

export const switchDarkMode = (value) => {
  return {
    type: SWITCH_MODE,
    payload: value,
  };
};

export const switchFontSize = (size) => {
  return {
    type: SWITCH_SIZE,
    payload: size,
  };
};

export const createNote = (values) => {
  return {
    type: CREATE,
    payload: {
      title: values.title,
      desc: values.description,
      color: values.color,
      id: values.id,
      date: new Date().toLocaleString(),
    },
  };
};

export const deleteNote = (index) => {
  return {
    type: DELETE,
    payload: index,
  };
};

export const editNote = (values) => {
  return {
    type: EDIT,
    payload: {
      title: values.title,
      desc: values.desc,
      id: values.id,
    },
  };
};

export const incrementId = () => {
  return {
    type: INCREMENT,
  };
};

export const moveToRemoved = (values) => {
  return {
    type: MOVE_TO_REMOVED,
    payload: {
      title: values.title,
      desc: values.desc,
    },
  };
};

export const moveToDone = (values) => {
  return {
    type: MOVE_TO_DONE,
    payload: {
      title: values.title,
      desc: values.desc,
    },
  };
};
