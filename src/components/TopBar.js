import React from "react";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

import { darkModeBgMenu } from "../helpers/consts";

import "../css/topbar.css";

const TopBar = ({ darkmode }) => {
  const [currentTime, setCurrentTime] = useState(null);

  const style = darkmode ? { backgroundColor: darkModeBgMenu } : null;

  useEffect(() => {
    setInterval(() => {
      const date = new Date();

      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      setCurrentTime(
        `${hours < 10 ? "0" + hours : hours}:${
          minutes < 10 ? "0" + minutes : minutes
        }:${seconds < 10 ? "0" + seconds : seconds}`
      );
    });
  }, []);

  return (
    <div className="top-bar" style={style}>
      <div className="top-bar__date">{new Date().toLocaleDateString()}</div>
      <div className="top-bar__hour">{currentTime}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    darkmode: state.settingsList.darkmode,
  };
};

export default connect(mapStateToProps, null)(TopBar);
