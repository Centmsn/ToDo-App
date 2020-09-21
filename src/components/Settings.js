import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { hideSettings } from "../actions";

import "../css/settings.css";

class Settings extends Component {
  handleVisibility = () => {
    if (this.props.isVisible === "HIDE") {
      return { transform: "translateY(100vh)" };
    } else {
      return { transform: "translateY(0)" };
    }
  };

  displayDarkMode = (formProps) => {
    return (
      <>
        <label htmlFor="darkmode">DarkMode:</label>
        <input {...formProps.input} type="checkbox" />
      </>
    );
  };

  displayFontSize = (formProps) => (
    <>
      <label htmlFor="darkmode">Font size:</label>
      <input {...formProps} type="radio" name="fontSize" value="small" />
    </>
  );

  handleSubmit = (values) => {
    console.log(values.darkMode, values.fontSize);
    localStorage.setItem("darkmode", `${values.darkMode}`);
    localStorage.setItem("fontsize", `${values.fontSize}`);

    this.props.hideSettings();
  };

  render() {
    return (
      <div className="settings" style={this.handleVisibility()}>
        <div className="settings__options-container">
          <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
            <div className="settings__box">
              <label htmlFor="darkmode">
                DarkMode
                <Field
                  name="darkMode"
                  component="input"
                  type="checkbox"
                  id="darkmode"
                  checked={this.props.darkmode}
                />
              </label>
            </div>
            <div className="settings__box">
              <label>
                Font size
                <Field
                  name="fontSize"
                  component="input"
                  type="radio"
                  value="small"
                />
                <Field
                  name="fontSize"
                  component="input"
                  type="radio"
                  value="normal"
                />
                <Field
                  name="fontSize"
                  component="input"
                  type="radio"
                  value="large"
                />
              </label>
            </div>

            <div className="settings__box">
              <button>Save</button>
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
    initialValues: {
      darkMode: false,
    },
  };
};

const validate = () => {
  console.log("abc");
};

const WrappedSettings = reduxForm({
  form: "settings",
  enableReinitialize: true,
  validate,
})(Settings);

export default connect(mapStateToProps, { hideSettings })(WrappedSettings);
