import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { Route } from "react-router";

const Client = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      fetch('http://localhost:5000/Inventory')
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.log('error', error));
    }, []);

  return (
    <div className="wrapper">
    {data.map((item)=>{
    return(
      <div className="row" key={item.itemId}>
      <div className="card">
      <img src={item.Image} alt=""/>

      <div className="details">
        <h2> {item.ItemName}</h2>
        <p>Item Code: {item.ItemCode}</p>
        <p>Availability:{item.Availability}</p>
      </div>

      <div className="btns">
        <button>Reserve</button>
      </div>
    </div>
  </div>
    )
  })}

  </div>
);
};

export default Client;


