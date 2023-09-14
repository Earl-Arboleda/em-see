import React from "react";
import Cards from "./Cards";
import res from "./ReservedList";

const Reserved = () => {
  return (
    <div className="wrapper">
    {res.map((item) => {
      return (
        <div className="row" key={item.itemNo}>
          <Cards
            imgUrl={item.imgURL}
            itemName={item.itemName}
            itemNumber={item.itemNumber}
            availability={item.availability}
            button1 = "Claim"
            button2 = "Cancel"
          />
        </div>
      );
    })}
  </div>
);
};

export default Reserved;
