import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import {
  showCreateNote,
  hideCreateNote,
  showSettings,
  hideSettings,
} from "../actions";

import "../css/menu.css";

const Menu = ({
  createNoteVisiblity,
  settingsVisibility,
  showCreateNote,
  hideCreateNote,
  showSettings,
  hideSettings,
}) => {
  const iconStyle =
    createNoteVisiblity === "SHOW" ? { transform: "rotate(45deg)" } : null;

  const handleCreateNoteVisiblity = () => {
    if (createNoteVisiblity === "HIDE") {
      showCreateNote();
      hideSettings();
    } else {
      hideCreateNote();
    }
  };

  const handleSettingsVisiblity = () => {
    if (settingsVisibility === "HIDE") {
      showSettings();
      hideCreateNote();
    } else {
      hideSettings();
    }
  };

  const hideWindows = () => {
    hideSettings();
    hideCreateNote();
  };

  return (
    <div className="menu">
      <div className="menu__button menu__button--left">
        <Link to="/" className="menu__link" onClick={hideWindows}>
          <FontAwesomeIcon icon={faHome} />
        </Link>
      </div>
      <div className="menu__button">
        <Link
          to="/settings"
          className="menu__link"
          onClick={handleSettingsVisiblity}
        >
          <FontAwesomeIcon icon={faCogs} />
        </Link>
      </div>
      <div className="menu__button menu__button--center">
        <Link to="/" className="menu__link" onClick={handleCreateNoteVisiblity}>
          <FontAwesomeIcon
            icon={faPlus}
            style={iconStyle}
            className="menu__icon"
          />
        </Link>
      </div>
      <div className="menu__button">
        <Link to="/deleted" className="menu__link" onClick={hideWindows}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    createNoteVisiblity: state.notesMenu,
    settingsVisibility: state.settings,
  };
};

export default connect(mapStateToProps, {
  showCreateNote,
  hideCreateNote,
  showSettings,
  hideSettings,
})(Menu);
