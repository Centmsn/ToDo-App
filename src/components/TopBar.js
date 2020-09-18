import React from "react";
import { useEffect, useState } from "react";

import "../css/topbar.css";

const TopBar = () => {
  const [currentTime, setCurrentTime] = useState(null);

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
    <div className="top-bar">
      <div className="top-bar__date">{new Date().toLocaleDateString()}</div>
      <div className="top-bar__hour">{currentTime}</div>
    </div>
  );
};

export default TopBar;
