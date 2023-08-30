import React, { useState } from "react";
import List from "./List";

const Body = () => {
  // Example state to track the current tab (Available, Reserved, Borrowed, History)
  const [currentTab, setCurrentTab] = useState("Available");

  return (
    <div className="ui">
      <div className="container">
        {/* Add click handlers to the buttons */}
        <button onClick={() => setCurrentTab("Available")}>Available</button>
        <button onClick={() => setCurrentTab("Reserved")}>Reserved</button>
        <button onClick={() => setCurrentTab("Borrowed")}>Borrowed</button>
        <button onClick={() => setCurrentTab("History")}>History</button>
      </div>

      <div className="table">
        {/* Render List component with the currentTab */}
        <List currentTab={currentTab} />
      </div>
    </div>
  );
};

export default Body;
