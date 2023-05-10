import React from "react";
import "./Spinner.css";
import randomColor from "randomcolor";

function get_my_coords(theta, radius) {
  return { x: Math.cos(theta) * radius, y: Math.sin(theta) * radius };
}

function Segment(props) {
  let styles = {
    card: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      height: "100px",
      width: "100px",
      backgroundColor: "blue",
      borderRadius: "50px",
    },
  };

  let new_coords = get_my_coords(props.theta, props.radius);

  return (
    <div
      style={{
        ...styles.card,
        left: `${props.center.x + new_coords.x}px`,
        top: `${props.center.y - new_coords.y}px`,
      }}
    ></div>
  );
}

export default Segment;
