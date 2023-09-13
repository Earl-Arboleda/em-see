import React, { useState } from "react";
import List from "./List";
import Reserved from "./Reserved";
const Body = () => {
  // Example state to track the current tab (Available, Reserved, Borrowed, History)
  const [currentTab, setCurrentTab] = useState(List);

  function reserveTab(){
    setCurrentTab(Reserved);
  }

  function availableTab(){
    setCurrentTab(List);
  }
  return (
    <div className="ui">
      <div className="container">
        {/* Add click handlers to the buttons */}
        <button onClick={availableTab}>Available</button>
        <button onClick={reserveTab}>Reserved</button>
        <button onClick={() => setCurrentTab("Borrowed")}>Borrowed</button>
        <button onClick={() => setCurrentTab("History")}>History</button>
      </div>

      <div className="table">
        {currentTab}
        
      </div>
    </div>
  );
};

export default Body;
