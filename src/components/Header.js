import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      {props.children}
      {/*       <div className="buttonContainer">
        <button onClick={props.filterFish}>
          <i class="fas fa-fish"></i>
        </button>
        <button onClick={props.filterBugs}>
          <i class="fas fa-spider"></i>
        </button>
        <button onClick={props.filterReset}>
          <i className="fas fa-redo"></i>
        </button>
        <button onClick={props.filterAlpha}>
          <i className="fas fa-sort-alpha-down"></i>
        </button>
        <button onClick={props.filterValue}>
          <i className="fas fa-dollar-sign"></i>
        </button>
      </div> */}
    </div>
  );
};

export default Header;
