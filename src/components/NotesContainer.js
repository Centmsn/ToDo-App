import React from "react";

import Note from "./Note";

import "../css/notescontainer.css";

const NotesContainer = () => {
  return (
    <div className="notes-container">
      <Note />
      <Note />
      <Note />
      <Note />
    </div>
  );
};

export default NotesContainer;
