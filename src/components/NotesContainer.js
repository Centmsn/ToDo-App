import React from "react";
import { connect } from "react-redux";
import { createNote } from "../actions";

import Note from "./Note";

import "../css/notescontainer.css";

const NotesContainer = ({ notesList, darkmode }) => {
  const containerStyle = darkmode ? { backgroundColor: "black" } : null;

  const renderNotes = () =>
    notesList.map((note) => (
      <Note
        title={note.title}
        description={note.desc}
        id={note.id}
        color={note.color}
        date={note.date}
      />
    ));

  return (
    <div className="notes-container" style={containerStyle}>
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
