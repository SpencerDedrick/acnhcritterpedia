import React from "react";

const InfoCard = ({ fish }) => {
  return (
    <div className="infoCard ">
      <div className="infoCardHeader">
        <div className="infoCardName">Horned Atlas</div>

        <div className="infoCardImage">
          <img src="https://vignette.wikia.nocookie.net/animalcrossing/images/1/12/NH-Icon-hornedatlas.png/revision/latest?cb=20200401005428"></img>
        </div>
      </div>
      <div className="infoCardStats">
        <div className="infoCardTimeContainer">
          <div className="infoCardSeason">Season</div>
          <div className="infoCardTime">5pm-8am</div>
        </div>

        <div className="infoCardFooter">Trees</div>
      </div>
    </div>
  );
};

export default InfoCard;
