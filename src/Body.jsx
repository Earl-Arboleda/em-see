import React, { useState } from "react";
import List from "./Body Contents/List";
import Reserved from "./Body Contents/Reserved";
import Borrow from "./Body Contents/Borrowed";
import Available from "./Body Contents/List";

const Body = () => {
  // Example state to track the current tab (Available, Reserved, Borrowed, History)
  function defaultPage(){
    return(<Available/>)
  }
  
  const [currentTab, setCurrentTab] = useState(defaultPage);

  function reserveTab(){
    setCurrentTab(() => {
      return(<Reserved/>)
    });
  }

  function availableTab(){
    setCurrentTab(()=>{
      return(<Available/>)
    });
  }

  function borrowTab(){
    setCurrentTab(()=>{return(<Borrow/>)})
  }
  
  return (
    <div className="body">
      <div className="table">
      <div className="container">
        {/* Add click handlers to the buttons */}
        <button onClick={availableTab}>Available</button>
        <button onClick={reserveTab}>Reserved</button>
        <button onClick={borrowTab}>Borrowed</button>
        <button onClick={() => setCurrentTab("History")}>History</button>
      </div>
      <div className="list"> 
       {currentTab}
        </div>
      </div>
    </div>
  );
};

export default Body;
