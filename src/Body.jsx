import React, { useState } from "react";
import List from "./List";
import Reserved from "./Reserved";
import Available from "./List";
import Borrow from "./Borrowed";

const Body = () => {
  // Example state to track the current tab (Available, Reserved, Borrowed, History)
  const [currentTab, setCurrentTab] = useState(Available);

  function reserveTab(){
    setCurrentTab(Reserved);
  }

  function availableTab(){
    setCurrentTab(List);
  }

  function borrowTab(){
    setCurrentTab(Borrow)
  }
  
  return (
    <div className="ui">
      <div className="container">
        {/* Add click handlers to the buttons */}
        <button onClick={availableTab}>Available</button>
        <button onClick={reserveTab}>Reserved</button>
        <button onClick={borrowTab}>Borrowed</button>
        <button onClick={() => setCurrentTab("History")}>History</button>
      </div>

      <div className="table">
      <div className="list"> 
        {currentTab}
        </div>
      </div>
    </div>
  );
};

export default Body;
