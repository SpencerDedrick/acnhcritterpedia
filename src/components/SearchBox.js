import React from "react";

const SearchBox = ({ searchfield, searchChange, filterReset }) => {
  return (
    <div>
      <input
        className="searchbox"
        type="search"
        placeholder="search critter"
        onChange={searchChange}
        onFocus={(e) => {
          e.target.value = "";
          filterReset();
        }}
      />
    </div>
  );
};

export default SearchBox;
