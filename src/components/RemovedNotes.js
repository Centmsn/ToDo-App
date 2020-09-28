import React from "react";
import { connect } from "react-redux";
import "../css/removednotes.css";

const RemovedNotes = ({ removed, done, darkmode }) => {
  const renderNotes = (list) =>
    list.map((notes) => (
      <li className="list__item">
        <h4 className="list__title">{notes.title}</h4>
        <p>{notes.desc}</p>
      </li>
    ));

  const styleContainer = darkmode ? { backgroundColor: "black" } : null;
  const styleTitle = darkmode ? { color: "white" } : null;

  return (
    <div className="removed-container" style={styleContainer}>
      <div className="removed-container__box">
        <p className="removed-container__title" style={styleTitle}>
          Completed tasks
        </p>
        <ul className="list">{renderNotes(done)}</ul>
      </div>
      <div className="removed-container__box">
        <p className="removed-container__title" style={styleTitle}>
          Removed tasks
        </p>
        <ul className="list">{renderNotes(removed)}</ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    removed: state.removedNotes,
    done: state.doneNotes,
    darkmode: state.settingsList.darkmode,
  };
};

export default connect(mapStateToProps, null)(RemovedNotes);
