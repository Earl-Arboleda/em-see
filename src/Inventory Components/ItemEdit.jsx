// EditModal.js
import React, { useState } from 'react';
import Popup from './Popup';

const EditModal = ({ isOpen, closeEditModal, rowData, updateData }) => {
  const [editedData, setEditedData] = useState(rowData);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSave = () => {
    // Send a POST request to update the data in the database with editedData
    fetch('http://localhost:5000/updateInventory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedData),
    })
      .then((response) => {
        if (response.ok) {
          // Handle success, e.g., close the modal and update the UI.
          updateData(editedData);
          closeEditModal();
        } else {
          // Handle error.
        }
      })
      .catch((error) => {
        // Handle error.
      });
  };

  return (
    <>
    <div className="Sample">
      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <div className="modal">
                <div className="image">
                {imageSrc && <img src={imageSrc} alt="Uploaded" />}
                </div >
                <div className="forms">
                    <form onSubmit={handleSubmit} >
                        <input type="file" onChange={handleFileChange} accept="image/*" />
                        <input type="text" name="ItemName" value={item.ItemName} onChange={handleInput} required placeholder="Item Name" />
                        <input type="text" name="ItemCode" value={item.ItemCode} onChange={handleInput} required placeholder="Item Code" />
                        <input type="text" name="SerialCode" value={item.SerialCode} onChange={handleInput} required placeholder="Serial Code" />
                        <input type="text" name="Description" value={item.Description} onChange={handleInput} placeholder="Brand" />
                        <select  name="Availability" value={item.Availability}  onChange={handleInput}>
                            {options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                            ))}
                        </select>
                        <select  name="Status" value={item.Status} onChange={handleInput}>
                            {status.map((stat, index) => (
                            <option key={index} value={stat}>
                                {stat}
                            </option>
                            ))}
                        </select>
                        {/* <input type="text" name="Availability" value={item.Availability} onChange={handleInput} required placeholder="Availability" /> */}
                        <input id="submit" type="submit" value="Submit"/>
                    </form>
                    </div>
                
            </div>
      </Popup>
    </div>
    </>
    // Render the modal with input fields for editing rowData and a Save button.
    // Use handleInputChange to update editedData, and handleSave to save the changes.
  );
};

export default EditModal;
