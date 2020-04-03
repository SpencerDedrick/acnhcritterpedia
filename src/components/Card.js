import React from "react";

const Card = ({ name, value }) => {
  return (
    <div className="br3 ma1 tc card">
      <div className="cardText">
        <h2>{name}</h2>
        <h2>{value}</h2>
      </div>
    </div>
  );
};

export default Card;
