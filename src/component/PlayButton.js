import "../CSS/PlayButton.css";
import { useState } from "react";

function PlayButton({
  children,
  onEventPasskrRhaHu,
  onPlay,
  onPause,
}) {
  console.log("Render PlayButton");
  const [play, setPlay] = useState(false);

  function handleClick(e) {
    e.stopPropagation();
    // console.log(message);
    // onEventPasskrRhaHu();
    if (play) onPause();
    else onPlay();

    setPlay(!play);
  }

  return (
    <button onClick={handleClick}>
      {children} {play ? "Pause : ⏸️" : "Play : ▶️"}
    </button>
  );
}

export default PlayButton;
