import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { editNote, hideEdit } from "../actions";
import { renderFormInput, handleVisibility } from "../helpers";

import "../css/noteedit.css";

const NoteEdit = ({ isVisible, editNote, handleSubmit, hideEdit, id }) => {
  const setVisibility = () => {
    return handleVisibility(isVisible);
  };

  const oNSubmit = (values) => {
    const params = { desc: values.desc, title: values.title, id };

    editNote(params);

    hideEdit();
  };

  const onReject = (e) => {
    e.preventDefault();

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
          />
          <Field
            component={renderFormInput}
            label="description"
            type="text"
            name="desc"
            value="desc"
          />
          <button className="button">Save changes</button>
          <button className="button" onClick={onReject}>
            Discard changes
          </button>
        </form>
      </div>
    </div>
  );
};

const validate = () => {
  const errors = {};

  return errors;
};

const mapStateToProps = (state) => {
  return {
    isVisible: state.editList.visibility,
    id: state.editList.id,
  };
};

const WrappedNoteEdit = reduxForm({ form: "noteEdit", validate })(NoteEdit);

export default connect(mapStateToProps, { editNote, hideEdit })(
  WrappedNoteEdit
);
