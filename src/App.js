import "./App.css";
import Spinner from "./Spinner";
import React, { useState } from "react";

function App() {
  let [names, setNames] = useState([
    "David",
    "Josh",
    "Brooke",
    "Celine",
    "Jason",
    "Hugh",
    "David",
    "Josh",
    "Brooke",
    "Celine",
    "Jason",
    "Hugh",
  ]);

  const [spinning, setSpinning] = useState(false);
  const [winners, setWinners] = useState([]);

  const duration = 10;
  const wheelColor = "#d38c12";
  const fontColor = "#FFFFFF";

  function spinWheelEventHandler(data) {
    if (names.length > 0 && spinning !== true) {
      var selectedIndex = data;

      // set this state to disable tab and wheel click when spinning
      setSpinning(true);

      // after done spinning enable update player
      setTimeout(() => {
        setSpinning(false);
      }, duration * 1000);

      setTimeout(() => {
        setWinners(winners.concat(names[selectedIndex]));
      }, duration * 1000);

      setTimeout(() => {
        setOpenModal(true);
      }, duration * 1000);
    }
  }

  return (
    <div className="App">
      <Spinner
        names={names}
        onSpin={spinWheelEventHandler}
        spinning={spinning}
      />
    </div>
  );
}

export default App;
