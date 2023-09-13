import React from "react";
import Cards from "./Cards";
import items from "./ItemList";

const List = () => {
  return (
    <div className="list"> 
      <div className="wrapper">
      {items.map((item) => {
        return (
          <div className="row" key={item.itemNo}>
            <Cards
              imgUrl={item.imgURL}
              itemName={item.itemName}
              itemNumber={item.itemNumber}
              availability={item.availability}
            />
          </div>
        );
      })}
    </div>
    </div>
  );
};

export default List;
