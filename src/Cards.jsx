import React from "react";


const Cards = (props) => {
  return (
    <div className="card">
      {/* Add an <img> element with the source from props.imgUrl */}
      <img src={props.imgUrl} alt="Item Image" />

      <div className="details">
        <h2>{props.itemName}</h2>
        <p>Item Number: {props.itemNo}</p>
        <p>Availability: {props.availability}</p>
      </div>

      <div className="btns">
        <button>Borrow</button>
        <button>Reserve</button>
      </div>
    </div>
  );
};

export default Cards;
