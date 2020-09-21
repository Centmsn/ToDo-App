import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { createNote, hideCreateNote, incrementId } from "../actions";

import "../css/notecreate.css";

class NoteCreate extends Component {
  handleVisibility = () => {
    if (this.props.isVisible === "HIDE") {
      return { transform: "translateY(100vh)" };
    } else {
      return { transform: "translateY(0)" };
    }
  };

  handleSubmit = (values) => {
    const params = { ...values, id: this.props.id };
    this.props.incrementId();

    this.props.createNote(params);
    this.props.reset();
    this.props.hideCreateNote();
  };

  renderFormTextarea = (field) => {
    return (
      <>
        <label className="note-create__form-label">
          {field.label}
          <textarea
            {...field.input}
            className="note-create__form-input note-create__form-input--large"
          />
        </label>
        {field.meta.touched ? <p>{field.meta.error}</p> : null}
      </>
    );
  };

  renderFormInput = (field) => {
    console.log(field);
    return (
      <>
        <label className="note-create__form-label">
          {field.label}
          <input
            type={field.type}
            {...field.input}
            className="note-create__form-input"
            autoComplete="off"
          />
        </label>
        {field.meta.touched ? <p>{field.meta.error}</p> : null}
      </>
    );
  };

  render() {
    return (
      <div className="note-create" style={this.handleVisibility()}>
        <div className="note-create__form-container">
          <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
            <div className="note-create__form-field">
              Color:
              <Field
                name="color"
                component={this.renderFormInput}
                type="radio"
                label="Red"
                value="rgb(209, 63, 63)"
              />
              <Field
                name="color"
                component="input"
                type="radio"
                value="rgb(99, 170, 84)"
              />
              <Field
                name="color"
                component="input"
                type="radio"
                value="rgb(252, 219, 111)"
              />
            </div>
            <div className="note-create__form-field">
              <Field
                name="title"
                component={this.renderFormInput}
                type="text"
                label="Note title"
              />
            </div>
            <div className="note-create__form-field">
              <Field
                name="description"
                component={this.renderFormTextarea}
                label="Note description"
              />
            </div>
            <button type="submit">Create</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { isVisible: state.notesMenu, id: state.id };
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
