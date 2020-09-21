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
