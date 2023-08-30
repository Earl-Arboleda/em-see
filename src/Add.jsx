import React, { useState } from 'react';
import './Add.css';

const Add = ({ onClose, onAddItem }) => {
    const [inputValues, setInputValues] = useState({
        imgURL: '',
        itemName: '',
        itemNumber: '',
        serialNumber: '',
        description: '',
        availability: 'available', // Default value for availability
        status: 'functional'     // Default value for status
    });

    const addItem = () => {
        // Create a new item using the input values
        const newItem = { ...inputValues };

        // Pass the new item back to the parent component
        onAddItem(newItem);

        // Clear the input values after adding
        setInputValues({
            imgURL: '',
            itemName: '',
            itemNumber: '',
            serialNumber: '',
            description: '',
            availability: 'available', // Reset to default value
            status: 'functional'     // Reset to default value
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setInputValues({
                    ...inputValues,
                    imgURL: event.target.result
                });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="popup">
            <div className="popup-content">
                <span className="close" onClick={onClose}>
                    &times;
                </span>
                <h2>Add Item</h2>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                />
                <input
                    type="text"
                    name="itemName"
                    placeholder="Item Name"
                    value={inputValues.itemName}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="itemNumber"
                    placeholder="Item Number"
                    value={inputValues.itemNumber}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="serialNumber"
                    placeholder="Serial Number"
                    value={inputValues.serialNumber}
                    onChange={handleInputChange}
                />
                <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    value={inputValues.description}
                    onChange={handleInputChange}
                />
                <button onClick={addItem}>Add</button>
            </div>
        </div>
    );
};

export default Add;
