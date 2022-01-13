import "./App.css";
import React, { useState } from "react";
import { padBanks } from "./data";
import Display from "./Components/Display";
import Pads from "./Components/Pads";
import Settings from "./Components/Settings";

function App() {
  const [display, setDisplay] = useState("Preset: 1 Heater");

  const [padState, setPadState] = useState({
    padBank: padBanks.heater,
    volume: 50,
  });
  const updateDisplay = (name) => {
    setDisplay(name);
  };
  const changeBank = () => {
    if (padState.padBank === padBanks.heater) {
      setPadState({ ...padState, padBank: padBanks.chord });
      setDisplay("Preset: 2 Chord");
    } else {
      setPadState({ ...padState, padBank: padBanks.heater });
      setDisplay("Preset: 1 Heater");
    }
  };
  const updateVolume = (e) => {
    setPadState({
      ...padState,
      volume: e.target.value,
    });
    setDisplay("volume " + e.target.value);
    setTimeout(() => {
      setDisplay("");
    }, 800);
  };

  return (
    <div className="drum" id="drum-machine">
      <Display display={display} />
      <div className="pads-container">
        <Pads
          padBank={padState.padBank}
          updateDisplay={updateDisplay}
          volume={padState.volume}
        />
        <div className="settings-container">
          <Settings
            volume={padState.volume}
            updateVolume={updateVolume}
            changeBank={changeBank}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
