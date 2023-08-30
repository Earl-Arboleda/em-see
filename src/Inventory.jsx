import React, { useState } from 'react';
import './Inventory.css';
import Add from './Add';

const Inventory = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [items, setItems] = useState([]);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const addItem = (newItem) => {
        setItems([...items, newItem]);
    };

    return (
        <div className="inventory">
            <div className="add">
                <button onClick={openPopup}>Add</button>
            </div>
            <div className="search">
                {/* You can add search functionality here */}
            </div>
            <div className="inventory-table">
                <h2>Inventory Table</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Item Number</th>
                            <th>Serial Number</th>
                            <th>Description</th>
                            <th>Availability</th>
                            <th>Status</th>
                            {/* Add more table headers for additional properties */}
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <img src={item.imgURL} alt="Item" style={{ maxWidth: '100px' }} />
                                </td>
                                <td>{item.itemName}</td>
                                <td>{item.itemNumber}</td>
                                <td>{item.serialNumber}</td>
                                <td>{item.description}</td>
                                <td>{item.availability}</td>
                                <td>{item.status}</td>
                                {/* Add more table cells for additional properties */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isPopupOpen && (
                <div className="popup-overlay">
                    <Add onClose={closePopup} onAddItem={addItem} />
                </div>
            )}
        </div>
    );
};

export default Inventory;
