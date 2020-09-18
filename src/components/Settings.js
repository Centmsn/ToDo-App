import React from "react";
import { connect } from "react-redux";

import "../css/settings.css";

const Settings = ({ isVisible }) => {
  const handleVisibility = () => {
    if (isVisible === "HIDE") {
      return { transform: "translateY(100vh)" };
    } else {
      return { transform: "translateY(0)" };
    }
  };

  return (
    <div className="settings" style={handleVisibility()}>
      fssfdsfsd
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isVisible: state.settings };
};

export default connect(mapStateToProps, null)(Settings);
