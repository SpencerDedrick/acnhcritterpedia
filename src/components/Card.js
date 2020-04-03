import React from "react";

const Card = ({ name, value }) => {
  return (
    <div className="br3 ma2 tc card">
      <div>
        <h2>{name}</h2>
        <h2>{value}</h2>
      </div>
    </div>
  );
};

export default Card;
