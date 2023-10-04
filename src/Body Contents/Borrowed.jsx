import React from "react";
import Cards from "./Cards";
import borrowed from "./BorrowedList";

const Borrow = () => {
  return (
      <div className="wrapper">
      {borrowed.map((item) => {
        return (
          <div className="row" key={item.itemNo}>
            <Cards
              imgUrl={item.imgURL}
              itemName={item.itemName}
              itemNumber={item.itemNumber}
              availability={item.availability}
              button1 = "Report"
              button2 = "Return"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Borrow;