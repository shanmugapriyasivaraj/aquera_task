import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card_container">
      <div className="card_details">
        <div className="card_flex">
          {" "}
          <p className="card_title"> Name : </p>
          <p className="given_det">{props.name}</p>
        </div>
        <div className="card_flex">
          {" "}
          <p className="card_title"> Climate : </p>
          <p className="given_det">{props.climate}</p>
        </div>{" "}
        <div className="card_flex">
          {" "}
          <p className="card_title"> Population : </p>
          <p className="given_det">{props.population}</p>
        </div>{" "}
        <div className="card_flex">
          {" "}
          <p className="card_title"> Terrain : </p>
          <p className="given_det">{props.terrain}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
