import React from "react";

function Size(props) {
  return (
    <span className="options">
      <span className="description">Size :</span>
      <select
        name="size"
        id="menu"
        className="size-menu"
        onChange={(event) => props.onChange(event.target.value, "size")}
      >
        {props.lengths.map((element) => (
          <option key={10 * element} value={element}>
            {element}
          </option>
        ))}
      </select>
    </span>
  );
}

export default Size;
