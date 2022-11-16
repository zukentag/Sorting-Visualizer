import React from "react";

function Speed(props) {
  return (
    <span className="options">
      <select
        name="Algorithm"
        id="menu"
        className="speed-menu"
        onChange={(event) => props.onChange(event.target.value, "speed")}
      >
        {props.speeds.map((element) => (
          <option key={element} value={element}>
            {element}
          </option>
        ))}
      </select>
    </span>
  );
}

export default Speed;
