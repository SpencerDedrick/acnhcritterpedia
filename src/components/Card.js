import React from "react";

const Card = ({ name, value, image }) => {
  return (
    <div className="card">
      <div className="hoverContainer">
        {" "}
        <div className="cardName">{name}</div>
      </div>

      <img className="cardImage" src={image} alt={name}></img>
      <div className="cardValue">
        <h2>{value}</h2>
      </div>
    </div>
  );
};

export default Card;
