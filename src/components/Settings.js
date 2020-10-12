import React, { useRef } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { hideSettings, switchDarkMode, switchFontSize } from "../actions";
import { handleVisibility, renderFormInput, closeForm } from "../helpers";

import "../css/settings.css";

const Settings = ({
  isVisible,
  darkmode,
  handleSubmit,
  switchDarkMode,
  switchFontSize,
  hideSettings,
}) => {
  const formContainer = useRef();
  const setVisibility = () => {
    return handleVisibility(isVisible);
  };

  const onSubmit = (values) => {
    // localStorage.setItem("darkmode", `${values.darkMode}`);
    // localStorage.setItem("fontsize", `${values.fontSize}`);
    switchDarkMode(values.darkMode);
    switchFontSize(values.fontSize);
    hideSettings();
  };

  const style = darkmode ? { backgroundColor: "gray" } : null;

  return (
    <div
      className="settings"
      style={setVisibility()}
      onClick={(e) => closeForm(e, formContainer, hideSettings)}
    >
      <div
        className="settings__options-container"
        style={style}
        ref={formContainer}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="settings__box">
            <p className="settings__title">Turn off / on the lights</p>
            <Field
              name="darkMode"
              component={renderFormInput}
              type="checkbox"
              label="DarkMode"
              className="settings"
            />
          </div>
          <div className="settings__box">
            <p className="settings__title">Select font size</p>
            <Field
              name="fontSize"
              component={renderFormInput}
              type="radio"
              value="small"
              label="small"
              className="settings"
            />
            <Field
              name="fontSize"
              component={renderFormInput}
              type="radio"
              value="normal"
              label="normal"
              className="settings"
            />
            <Field
              name="fontSize"
              component={renderFormInput}
              type="radio"
              value="large"
              label="large"
              className="settings"
            />
          </div>

          <div className="settings__box">
            <button type="submit" className="button">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isVisible: state.settings,
    darkmode: state.settingsList.darkmode,
  };
};

const WrappedSettings = reduxForm({
  form: "settings",
  enableReinitialize: true,
})(Settings);

export default connect(mapStateToProps, {
  hideSettings,
  switchDarkMode,
  switchFontSize,
})(WrappedSettings);
