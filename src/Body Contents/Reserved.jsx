import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Route } from "react-router";

const Reserved = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch('http://localhost:5000/Reserved')
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <div className="wrapper">
    {data.map((item) => {
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
