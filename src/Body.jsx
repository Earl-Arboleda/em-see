import React, { useState, useEffect } from "react";
import List from "./Body Contents/List";
import Reserved from "./Body Contents/Reserved";
import Borrow from "./Body Contents/Borrowed";
import Available from "./Body Contents/List";
import { Routes,Route } from "react-router";
import { Link } from "react-router-dom";
import Cards from "./Body Contents/Cards";
import Client from "./Body Contents/ClientSide";
import Modal from "./Body Contents/BorrowingModal";

const Body = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedItemCode, setSelectedItemCode] = useState(null);


  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const borrowing = (ItemCode) =>{
    setSelectedItemCode(ItemCode);
    openModal();
    console.log(ItemCode);
    }


  return (<>
  <Modal isOpen={isModalOpen} onClose={closeModal} item={selectedItemCode}>
        {/* Place the content you want to display in the modal here */}
      </Modal>
    <div className="body">
    
      <div className="table">
      <div className="container">
        {/* Add click handlers to the buttons */}
        <Link to='/Available'>
        <button >Available</button>
        </Link>
        <Link to='/Reserved'>
        <button >Reserved</button>
        </Link>
        <Link to='/Borrowed'>
        <button >Borrowed</button>
        </Link>
        <Link to='/History'>
        <button >History</button>
        </Link>
      </div>

      <div className="list">
      
      <Routes>
        <Route path='Available' element={<Available click={borrowing} />} />
        <Route path='Borrowed' element={<><Borrow /></>} />
        <Route path='Reserved' element={<Reserved/>} />
        <Route path='History' element={null} />
      </Routes>
        </div>
      </div>
      
    </div>
    </>
  );
};

export default Body;
