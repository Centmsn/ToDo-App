import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, reset } from "redux-form";

import { editNote, hideEdit } from "../actions";
import {
  renderFormInput,
  handleVisibility,
  renderFormTextarea,
} from "../helpers";

import "../css/noteedit.css";

const NoteEdit = ({
  isVisible,
  editNote,
  handleSubmit,
  hideEdit,
  id,
  note,
}) => {
  const setVisibility = () => {
    return handleVisibility(isVisible);
  };

  const oNSubmit = (values) => {
    const params = { desc: values.desc, title: values.title, id };

    editNote(params);

    reset();
    hideEdit();
  };

  const onReject = (e) => {
    e.preventDefault();
    console.log(note);
    hideEdit();
  };

  return (
    <div className="note-edit" style={setVisibility()}>
      <div className="note-edit__form">
        <form onSubmit={handleSubmit(oNSubmit)}>
          <Field
            component={renderFormInput}
            label="title"
            type="text"
            name="title"
            value="title"
            className="note-edit"
          />
          <Field
            component={renderFormTextarea}
            label="description"
            type="text"
            name="desc"
            value="desc"
            className="note-edit"
          />
          <button className="button">Save changes</button>
          <button className="button button--red" onClick={onReject}>
            Discard changes
          </button>
        </form>
      </div>
    </div>
  );
};

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter note title";
  }

  if (!values.desc) {
    errors.desc = "Enter note description";
  }

  return errors;
};

const mapStateToProps = (state) => {
  const note = state.notesList.filter((note) => note.id === state.editList.id);

  let title = "e";
  let noteDesc = "";
  if (note.length === 1) {
    title = note[0].title;
    noteDesc = note[0].desc;
  }
  return {
    isVisible: state.editList.visibility,
    id: state.editList.id,
    initialValues: { title, desc: "abcabc" },
  };
};

const WrappedNoteEdit = reduxForm({ form: "noteEdit", validate })(NoteEdit);

export default connect(mapStateToProps, { editNote, hideEdit })(
  WrappedNoteEdit
);
