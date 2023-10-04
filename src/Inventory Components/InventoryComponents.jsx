import React, { useState } from "react";
import Add from "./AddModal";
import Inventory from "./Inventory";

const Inv = () => {
  const [popup, setPopUp] = useState(false); // Initialize popup as false

  const openPopup = () => {
    setPopUp(() => {
      return(      <Add  state={popup} isClose={closePopup} />
      )
    }); // Set popup to true when the "Add" button is clicked
  };

  const closePopup = () => {
    setPopUp(null); // Set popup to false when the popup is closed
  };

  return (
    <div>
      <Inventory click={openPopup} />
      {/* Pass the closePopup function to the Add component */}
    </div>
  );
};

export default Inv;
