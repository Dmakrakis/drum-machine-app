import React from "react";

const Settings = ({ volume, updateVolume, changeBank }) => {
  return (
    <div>
      <div id="volume" className="setting">
        <label style={{ display: "block" }}>- Volume +</label>
        <input
          type="range"
          min="1"
          max="100"
          value={volume}
          id="volume-range"
          onChange={updateVolume}
        />
      </div>

      <div id="bank" className="bank">
        <label style={{ display: "block" }}>Preset</label>
        <label className="switch" style={{ display: "block" }}>
          <input type="checkbox" id="bank-change" onChange={changeBank} />
          <span class="slider"></span>
        </label>
      </div>
    </div>
  );
};

export default Settings;
