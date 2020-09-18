import React from "react";
import { connect } from "react-redux";

import "../css/notecreate.css";

const NoteCreate = ({ isVisible }) => {
  const handleVisibility = () => {
    if (isVisible === "HIDE") {
      return { transform: "translateY(100vh)" };
    } else {
      return { transform: "translateY(0)" };
    }
  };

  return (
    <div className="note-create" style={handleVisibility()}>
      <div className="note-create__form-container">
        <form></form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isVisible: state.notesMenu };
};

export default connect(mapStateToProps, null)(NoteCreate);
