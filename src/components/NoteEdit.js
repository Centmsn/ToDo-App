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
  title,
}) => {
  const setVisibility = () => {
    return handleVisibility(isVisible);
  };

  const oNSubmit = (values) => {
    console.log(id);
    const params = { desc: values.desc, title: values.title, id };

    editNote(params);

    reset();
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
            initialValues={title}
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
  return {
    isVisible: state.editList.visibility,
    id: state.editList.id,
    initialValues: { title: state.editList.title, desc: state.editList.desc },
  };
};

const WrappedNoteEdit = reduxForm({
  form: "noteEdit",
  enableReinitialize: true,
  validate,
})(NoteEdit);

export default connect(mapStateToProps, { editNote, hideEdit })(
  WrappedNoteEdit
);