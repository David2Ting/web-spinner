import React, { useState, useEffect, useRef } from "react";
import Segment from "./Segment";
import "./Spinner.css";

function Spinner(props) {
  let names = props.names;
  let segments = names.map((name, index) => (
    <Segment name={name} degree={(360 / names.length) * (index - 1)} />
  ));

  const wheel = useRef(null);
  let [state, setState] = useState({ radius: 250, cards: [], spin: 0 });
  let [spinState, setSpinState] = useState("spinner");
  let [selectedItem, setSelectedItem] = useState(null);
  let temp_theta = 0.0;

  useEffect(() => {
    let centre_of_wheel = {
      x: parseFloat(wheel.current.style.width) / 2.0,
      y: parseFloat(wheel.current.style.height) / 2.0,
    };

    let new_cards = names.map((name, index) => (
      <Segment
        theta={(Math.PI / (names.length / 2.0)) * index}
        radius={state.radius}
        center={centre_of_wheel}
      />
    ));
    console.log(new_cards);
    setState({ ...state, cards: new_cards });
  }, []);

  let start_spin = () => {
    if (selectedItem == null) {
      const selectedItem = Math.floor(Math.random() * names.length);
      props.onSpin(selectedItem);
      setSelectedItem(selectedItem);
    }
  };

  let styles = {
    wheel: {
      position: "absolute",
      top: "50%",
      left: "50%",
      height: "300px",
      width: "300px",
    },
  };

  return (
    <div>
      <div
        className={spinState}
        onWheel={handle_scroll}
        ref={wheel}
        style={{
          ...styles.wheel,
        }}
      >
        {state.cards}
      </div>
      <button className="spin-button" onClick={start_spin}>
        Spin
      </button>
    </div>
  );
}

export default Spinner;
