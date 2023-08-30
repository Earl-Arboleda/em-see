import React from "react";
import Cards from "./Cards";
import items from "./ItemList";

const List = () => {
  return (
    <div className="list">
      {items.map((item) => {
        return (
          <div className="row" key={item.itemNo}>
            <Cards
              itemName={item.itemName}
              itemNo={item.itemNo}
              availability={item.availability}
            />
          </div>
        );
      })}
    </div>
  );
};

export default List;
