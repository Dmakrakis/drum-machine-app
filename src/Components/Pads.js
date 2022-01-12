import React from "react";
import Pad from "./Pad";

const Pads = ({ padBank, updateDisplay, volume }) => {
  return (
    <>
      <div id="drum-pads">
        {padBank.map((pad) => {
          const { id, description, url } = pad;
          return (
            <Pad
              id={id}
              key={id}
              name={description}
              src={url}
              updateDisplay={updateDisplay}
              volume={volume}
            />
          );
        })}
      </div>
    </>
  );
};

export default Pads;
