import React from "react";

const Card = ({ name, value, image }) => {
  return (
    <div className="card">
      <img className="cardImage" src={image} alt={name}></img>
      <span className="cardName">{name}</span>
      <div className="cardValue">
        <h2>{value}</h2>
      </div>
    </div>
  );
};

export default Card;
