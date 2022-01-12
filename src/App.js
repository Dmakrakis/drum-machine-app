import "./App.css";
import React, { useState } from "react";
import { padBanks } from "./data";
import Display from "./Components/Display";
import Pads from "./Components/Pads";
import Settings from "./Components/Settings";

function App() {
  const [padState, setPadState] = useState({
    padBank: padBanks.heater,
    display: "Preset: 1 Heater",
    volume: 50,
  });
  const updateDisplay = (name) => {
    setPadState({ ...padState, display: name });
  };

  const updateVolume = (e) => {
    setPadState({ ...padState, volume: e.target.value });
  };

  return (
    <div className="drum" id="drum-machine">
      <Display display={padState.display} />
      <div className="pads-container">
        <Pads
          padBank={padState.padBank}
          updateDisplay={updateDisplay}
          volume={padState.volume}
        />
        <div className="settings-container">
          <Settings volume={padState.volume} updateVolume={updateVolume} />
        </div>
      </div>
    </div>
  );
}

export default App;
