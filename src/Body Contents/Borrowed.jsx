import React from "react";
import Cards from "./Cards";
import { useState, useEffect } from "react";
import Modal from "./BorrowingModal";
import "./BorrowingModal.css";

const Borrow = () => {


  const [data, setData] = useState([])

  useEffect(() => {
      fetch('http://localhost:5000/Borrowed')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(error => console.log("error")); // Handle the promise rejection here
    }, []);
    
  
  return (
      <div className="wrapper">
   
      {data.map((item) => {
        return (
          <div className="row" key={item.borrowId}>
            <Cards
              imgUrl={item.Image}
              itemName={item.itemCode}
              itemNumber={item.clientName}
              availability={item.schoolId}
              button1 = "Borrow"
              button2 = "Return"
            />
          </div>
        );
      })}
      
        
    </div>
  );
};

export default Borrow;