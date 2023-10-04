import React from "react";

const Selectorcode = ({ setType }) => {
  return (
    <select
      className="form-select"
      onChange={(event) => {
        setType(event.target.value);
      }}
    >
      <option value="" selected>
        All
      </option>
      <option value="Cat">Cat</option>
      <option value="Dog">Dog</option>
      <option value="Rabbit">Rabbit</option>
    </select>
  );
};

export default Selectorcode;
