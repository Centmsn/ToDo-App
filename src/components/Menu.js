import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
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
  darkmode,
}) => {
  const iconStyle =
    createNoteVisiblity === "SHOW" ? { transform: "rotate(45deg)" } : null;

  const handleCreateNoteVisiblity = () => {
    if (createNoteVisiblity === "HIDE") {
      showCreateNote();
      hideSettings();
    } else {
      hideCreateNote();
      setTimeout(() => {}, 500);
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

  const style = darkmode ? { backgroundColor: "lightgray" } : null;

  return (
    <div className="menu" style={style}>
      <div className="menu__button--left">
        <NavLink to="/" className="menu__link" onClick={hideWindows} exact>
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
      </div>
      <div>
        <button className="menu__link" onClick={handleSettingsVisiblity}>
          <FontAwesomeIcon icon={faCogs} />
        </button>
      </div>
      <div className="menu__button--center" style={style}>
        <button
          className="menu__link menu__link--large"
          onClick={handleCreateNoteVisiblity}
        >
          <FontAwesomeIcon
            icon={faPlus}
            style={iconStyle}
            className="menu__icon"
          />
        </button>
      </div>
      <div>
        <NavLink to="/deleted" className="menu__link" onClick={hideWindows}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </NavLink>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    createNoteVisiblity: state.notesMenu,
    settingsVisibility: state.settings,
    darkmode: state.settingsList.darkmode,
  };
};

export default connect(mapStateToProps, {
  showCreateNote,
  hideCreateNote,
  showSettings,
  hideSettings,
})(Menu);
