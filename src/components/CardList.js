import React from "react";
import Card from "./Card";

const CardList = ({ fish }) => {
  const cardsArray = fish.map((fish) => {
    return (
      <Card
        key={fish.id}
        name={fish.name}
        value={fish.value}
        location={fish.location}
        type={fish.type}
        image={fish.image}
      />
    );
  });
  return (
    <div className="cardList ">
      <div></div>
      {cardsArray}
    </div>
  );
};

export default CardList;
