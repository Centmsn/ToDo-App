export const showCreateNote = () => {
  return {
    type: "SHOW-NOTES",
  };
};

export const hideCreateNote = () => {
  return {
    type: "HIDE-NOTES",
  };
};

export const showSettings = () => {
  return {
    type: "SHOW-SETTINGS",
  };
};

export const hideSettings = () => {
  return {
    type: "HIDE-SETTINGS",
  };
};

export const createNote = (values) => {
  return {
    type: "CREATE",
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
    type: "DELETE",
    payload: index,
  };
};

export const incrementId = () => {
  return {
    type: "INCREMENT",
  };
};

export const moveToRemoved = (values) => {
  return {
    type: "MOVE_TO_REMOVED",
    payload: {
      title: values.title,
      desc: values.desc,
    },
  };
};

export const moveToDone = (values) => {
  return {
    type: "MOVE_TO_DONE",
    payload: {
      title: values.title,
      desc: values.desc,
    },
  };
};
