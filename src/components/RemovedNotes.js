import React from "react";
import { connect } from "react-redux";
import "../css/removednotes.css";

const RemovedNotes = ({ removed, done, darkmode, font }) => {
  const renderNotes = (list) =>
    list.map((note) => (
      <li className="list__item" key={note.title}>
        <h4 className="list__title" style={{ fontSize: styleText() }}>
          {note.title}
        </h4>
        <p style={{ fontSize: styleText() }}>{note.desc}</p>
      </li>
    ));

  const styleText = () => {
    switch (font) {
      case "small":
        return "11px";
      case "normal":
        return "15px";
      case "large":
        return "18px";
      default:
        return "12px";
    }
  };
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
    font: state.settingsList.fontSize,
  };
};

export default connect(mapStateToProps, null)(RemovedNotes);
