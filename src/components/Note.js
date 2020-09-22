import React, { useRef } from "react";
import { deleteNote, moveToDone, moveToRemoved } from "../actions";
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
        <div className="note__title">{props.title}</div>
        <div className="note__text">{props.description}</div>
      </div>
    </div>
  );
};

export default connect(null, { deleteNote, moveToDone, moveToRemoved })(Note);
