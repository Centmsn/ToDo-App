import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { hideSettings, switchDarkMode, switchFontSize } from "../actions";

import "../css/settings.css";

class Settings extends Component {
  handleVisibility = () => {
    if (this.props.isVisible === "HIDE") {
      return { transform: "translateY(100vh)" };
    } else {
      return { transform: "translateY(0)" };
    }
  };

  renderFormField = (field) => {
    return (
      <label className="settings__label">
        {field.label}
        <input {...field.input} type={field.type} className="settings__input" />
      </label>
    );
  };

  handleSubmit = (values) => {
    // localStorage.setItem("darkmode", `${values.darkMode}`);
    // localStorage.setItem("fontsize", `${values.fontSize}`);
    this.props.switchDarkMode(values.darkMode);
    this.props.switchFontSize(values.fontSize);
    this.props.hideSettings();
  };

  render() {
    const style = this.props.darkmode ? { backgroundColor: "gray" } : null;

    return (
      <div className="settings" style={this.handleVisibility()}>
        <div className="settings__options-container" style={style}>
          <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
            <div className="settings__box">
              <p className="settings__title">Turn off / on the lights</p>
              <Field
                name="darkMode"
                component={this.renderFormField}
                type="checkbox"
                label="DarkMode"
              />
            </div>
            <div className="settings__box">
              <p className="settings__title">Select font size</p>
              <Field
                name="fontSize"
                component={this.renderFormField}
                type="radio"
                value="small"
                label="small"
              />
              <Field
                name="fontSize"
                component={this.renderFormField}
                type="radio"
                value="normal"
                label="normal"
              />
              <Field
                name="fontSize"
                component={this.renderFormField}
                type="radio"
                value="large"
                label="large"
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
  }
}

const mapStateToProps = (state) => {
  return {
    isVisible: state.settings,
    darkmode: state.settingsList.darkmode,
  };
};

const validate = () => {
  const errors = {};
  return errors;
};

const WrappedSettings = reduxForm({
  form: "settings",
  enableReinitialize: true,
  validate,
})(Settings);

export default connect(mapStateToProps, {
  hideSettings,
  switchDarkMode,
  switchFontSize,
})(WrappedSettings);
