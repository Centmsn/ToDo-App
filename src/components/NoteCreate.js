import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { createNote, hideCreateNote, incrementId } from "../actions";
import {
  renderFormInput,
  handleVisibility,
  renderFormTextarea,
} from "../helpers";

import "../css/notecreate.css";

class NoteCreate extends Component {
  handleSubmit = (values) => {
    const { incrementId, reset, createNote, hideCreateNote, id } = this.props;

    const params = { ...values, id: id };
    incrementId();

    createNote(params);
    reset();
    hideCreateNote();
  };

  setVisbility = () => {
    return handleVisibility(this.props.isVisible);
  };

  render() {
    const style = this.props.darkmode ? { backgroundColor: "gray" } : null;

    return (
      <div className="note-create" style={this.setVisbility()}>
        <div className="note-create__form-container" style={style}>
          <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
            <p className="note-create__title">Select note color</p>
            <div className="note-create__form-field note-create__form-field--flex">
              <Field
                name="color"
                component={renderFormInput}
                type="radio"
                label="Red"
                value="rgb(209, 63, 63)"
                className="note-create"
              />
              <Field
                name="color"
                component={renderFormInput}
                type="radio"
                label="Green"
                value="rgb(99, 170, 84)"
                className="note-create"
              />
              <Field
                name="color"
                component={renderFormInput}
                type="radio"
                label="Yellow"
                value="rgb(252, 219, 111)"
                className="note-create"
              />
            </div>
            <div className="note-create__form-field">
              <Field
                name="title"
                component={renderFormInput}
                type="text"
                label="Note title"
                className="note-create"
              />
            </div>
            <div className="note-create__form-field">
              <Field
                name="description"
                component={renderFormTextarea}
                label="Note description"
                className="note-create"
              />
            </div>
            <button type="submit" className="button">
              Create note
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isVisible: state.notesMenu,
    id: state.id,
    darkmode: state.settingsList.darkmode,
  };
};

const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = "Enter note title";
  }

  if (!values.description) {
    errors.description = "Enter note description";
  }

  return errors;
};

const WrappedNoteCreate = reduxForm({
  form: "noteCreate",
  validate,
})(NoteCreate);

export default connect(mapStateToProps, {
  createNote,
  hideCreateNote,
  incrementId,
})(WrappedNoteCreate);
