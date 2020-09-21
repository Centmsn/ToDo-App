import React from "react";
import { connect } from "react-redux";

import Note from "./Note";

import "../css/notescontainer.css";

const NotesContainer = ({ notesList, darkmode }) => {
  const renderNotes = () =>
    notesList.map((note) => (
      <Note
        title={note.title}
        description={note.desc}
        id={note.id}
        color={note.color}
      />
    ));

  return (
    <div
      className="notes-container"
      style={darkmode ? { backgroundColor: "black" } : null}
    >
      {renderNotes()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    notesList: state.notesList,
    darkmode:
      state.form.settings === undefined
        ? false
        : state.form.settings.values.darkMode,
  };
};

export default connect(mapStateToProps, null)(NotesContainer);
