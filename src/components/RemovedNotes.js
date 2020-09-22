import React from "react";
import { connect } from "react-redux";

import "../css/removednotes.css";

const RemovedNotes = ({ removed, done }) => {
  const renderNotes = (list) =>
    list.map((notes) => (
      <li>
        <span>{notes.title}</span>
        <span>{notes.desc}</span>
      </li>
    ));

  return (
    <div className="removed-container">
      <div className="removed-container__box">
        <p>Completed tasks</p>
        <ul>{renderNotes(done)}</ul>
      </div>
      <div className="removed-container__box">
        <p>Removed tasks</p>
        <ul>{renderNotes(removed)}</ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    removed: state.removedNotes,
    done: state.doneNotes,
  };
};

export default connect(mapStateToProps, null)(RemovedNotes);
