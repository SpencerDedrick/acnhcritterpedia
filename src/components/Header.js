import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <h1>New Horizons Critter Dex</h1>
      {props.children}
    </div>
  );
};

export default Header;
