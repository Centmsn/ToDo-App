import React, { useRef } from "react";
import { deleteNote } from "../actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import "../css/note.css";

const Note = (props) => {
  const noteRef = useRef();

  const style = {
    backgroundColor: props.color,
    color: props.color === "rgb(209, 63, 63)" ? "white" : "black",
  };

  const handleNoteDelete = () => {
    props.deleteNote(noteRef.current.dataset.key);
  };

  return (
    <div className="note" data-key={props.id} ref={noteRef} style={style}>
      <div className="note__top-bar">
        <div className="note__date">{`Created: ${new Date().toLocaleString()}`}</div>

        <div className="note__done">
          <FontAwesomeIcon
            icon={faCheck}
            className="note__icon"
            onClick={handleNoteDelete}
          />
        </div>
        <div className="note__delete">
          <FontAwesomeIcon
            icon={faTimes}
            className="note__icon"
            onClick={handleNoteDelete}
          />
        </div>
      </div>
      <div className="note__body">
        <div className="note__title">{props.title}</div>
        <div className="note__text">{props.description}</div>
      </div>
    </div>
  );
};

export default connect(null, { deleteNote })(Note);
