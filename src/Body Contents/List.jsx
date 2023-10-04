import React from "react";
import Cards from "./Cards";
import items from "./ItemList";
import { useEffect, useState } from "react";


const Available = () => {

  const [backendData, setBackendData] = useState([{}])

  // useEffect(() =>{
  //   fetch("/ItemList").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   )
  // },[])
  

  return (
      <div className="wrapper">
      {items.map((item) => {
        return (
          <div className="row" key={item.itemNo}>
            <Cards
              imgUrl={item.imgURL}
              itemName={item.itemName}
              itemNumber={item.itemNumber}
              availability={item.availability}
              button1 = "Borrow"
              button2 = "Reserve"
            />
          </div>
        );
      })}
    </div>
  );
};

export default Available;
