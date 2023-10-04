import React from "react";
import './Cards.css';

const Cards = (props) => {

  
  return (
    <div className="card">
      <img src={props.imgUrl} alt=""/>

      <div className="details">
        <h2> {props.itemName}</h2>
        <p>Item Number: {props.itemNumber}</p>
        <p>Availability: {props.availability}</p>
      </div>

      <div className="btns">
        <button>{props.button1}</button>
        <button>{props.button2}</button>
      </div>
    </div>
  );
};

export default Cards;
