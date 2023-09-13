import React from "react";
import Cards from "./Cards";
import res from "./ReservedList";
import './Reserved.css'

const Reserved = () => {
  return (
    <div className="Reserved"> 
      <div className="wrapper">
      {res.map((item) => {
        return (
          <div className="row" key={res.itemNo}>
            <Cards
              imgUrl={res.imgURL}
              itemName={res.itemName}
              itemNumber={res.itemNumber}
              availability={res.availability}
            />
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default Reserved;
