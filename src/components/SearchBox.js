import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input
        className="searchbox"
        type="search"
        placeholder="search critter"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
