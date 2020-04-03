import React from "react";
import Card from "./Card";

const CardList = ({ fish }) => {
  const cardsArray = fish.map((fish) => {
    return <Card key={fish.id} name={fish.name} value={fish.value} />;
  });
  return <div className="cardList br3">{cardsArray}</div>;
};

export default CardList;
