import React from "react";

const Display = ({ display }) => {
  return (
    <div className="display-container">
      <div className="drum-display" id="display">
        <div id="inner-display">{display}</div>
      </div>
    </div>
  );
};

export default Display;
