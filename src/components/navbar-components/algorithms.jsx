import React from "react";

function Algorithm(props) {
  return (
    <container className="options">
      <select
        name="Algorithm"
        id="menu"
        className="algo-menu"
        onChange={(event) => props.onChange(event.target.value, "algo")}
      >
        {props.algorithms.map((element) => (
          <option key={element.value} value={element.value}>
            {element.type}
          </option>
        ))}
      </select>
    </container>
  );
}

export default Algorithm;
