import React from "react";

const Card = ({ name, value, image }) => {
  return (
    <div className="br3 ma1 tc card">
      <div className="cardText">
        <div className="cardName">
          <h2>{name}</h2>
        </div>
        <img src={image}></img>
        <div className="cardInfo">
          <h2>{value}</h2>
        </div>
        <div className="cardFoot"></div>
      </div>
    </div>
  );
};

export default Card;
