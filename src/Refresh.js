import React from "react";
import "./Refresh.css";

const Refresh = ({ refresh }) => (
  <div className="RefreshIcon" onClick={() => refresh()}>
    <i className="fa fa-refresh"></i>
  </div>
);

export default Refresh;