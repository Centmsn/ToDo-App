import React from "react";
import { connect } from "react-redux";
import { editNote } from "../actions";
import { Field, reduxForm } from "redux-form";
import { renderFormInput } from "../helpers";

import "../css/noteedit.css";

const NoteEdit = ({ editNote }) => {
  return (
    <div className="note-edit">
      <form>
        <Field component={renderFormInput} label="" type="" name="" value="" />
        <Field component={renderFormInput} label="" type="" name="" value="" />
        <button>Save changes</button>
        <button>Discard changes</button>
      </form>
    </div>
  );
};

const validate = () => {
  const errors = {};

  return errors;
};

const mapStateToProps = (state) => {};

const WrappedNoteEdit = reduxForm({ form: "noteEdit", validate })(NoteEdit);

export default connect(mapStateToProps, { editNote })(WrappedNoteEdit);
