import React from "react";

const Settings = ({ volume, updateVolume }) => {
  return (
    <div>
      <div id="volume" className="setting">
        <label style={{ display: "block" }}>Volume:</label>
        <input
          type="range"
          min="1"
          max="100"
          value={volume}
          id="volume-range"
          onChange={updateVolume}
        />
      </div>
    </div>
  );
};

export default Settings;
