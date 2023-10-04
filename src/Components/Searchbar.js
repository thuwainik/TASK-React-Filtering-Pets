import React from "react";

const Searchbar = ({ setQuery }) => {
  return (
    <div className="input-group rounded">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        onChange={(event) => {
          setQuery(event.target.value);
        }}
      />
    </div>
  );
};

export default Searchbar;
