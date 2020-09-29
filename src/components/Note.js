import React, { useRef } from "react";
import { deleteNote, moveToDone, moveToRemoved } from "../actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import "../css/note.css";

const Note = (props) => {
  const noteRef = useRef();

  const displayFont = () => {
    switch (props.fontSize) {
      case "small":
        return "9px";

      case "normal":
        return "15px";

      case "large":
        return "22px";
      default:
        return "15px";
    }
  };

  const style = {
    backgroundColor: props.color,
    color: props.color === "rgb(209, 63, 63)" ? "white" : "black",
    fontSize: displayFont(),
  };

  const handleNoteDelete = (type) => {
    props.deleteNote(noteRef.current.dataset.key);
    const values = { title: props.title, desc: props.description };

    if (type === "DONE") {
      props.moveToDone(values);
    } else {
      props.moveToRemoved(values);
    }
  };

  return (
    <div className="note" data-key={props.id} ref={noteRef} style={style}>
      <div className="note__top-bar">
        <div className="note__date">{`Created: ${props.date}`}</div>

        <div className="note__done">
          <FontAwesomeIcon
            icon={faCheck}
            className="note__icon"
            onClick={() => handleNoteDelete("DONE")}
          />
        </div>
        <div className="note__delete">
          <FontAwesomeIcon
            icon={faTimes}
            className="note__icon"
            onClick={() => handleNoteDelete("REMOVED")}
          />
        </div>
      </div>
      <div className="note__body">
        <div className="note__title" style={{ fontSize: displayFont() }}>
          <h3>{props.title}</h3>
        </div>
        <div className="note__text">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fontSize: state.settingsList.fontSize,
  };
};

export default connect(mapStateToProps, {
  deleteNote,
  moveToDone,
  moveToRemoved,
})(Note);
