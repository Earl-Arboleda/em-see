import React, { useState } from 'react';
import Add from './AddModal'; // Import your Add component
import Inventory from './Inventory'; // Import your Inventory component

function Rerender() {
  const [dataUpdated, setDataUpdated] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleDataUpdated = () => {
    setDataUpdated(true);
  };



  

  return (
    <div>
      
      <Inventory isOpen={isPopupOpen} dataUpdated={dataUpdated} />
      <Add onDataUpdated={handleDataUpdated} />
    </div>
  );
}

export default Rerender;
