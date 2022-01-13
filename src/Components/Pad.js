import React from "react";

const Pad = ({ id, name, src, updateDisplay, volume }) => {
  const playClip = () => {
    const clip = document.getElementById(id);
    clip.currentTime = 0;
    clip.volume = volume / 100;
    clip.play();
    updateDisplay(name);
  };
  return (
    <div className="drum-pad noSelect" onClick={playClip}>
      {id}
      <audio className="clip" id={id} src={src}></audio>
    </div>
  );
};

export default Pad;
