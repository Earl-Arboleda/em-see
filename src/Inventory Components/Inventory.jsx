import React, { useEffect, useState } from 'react';
import TRow from './TR';
import './Inventory.css';
import './Table.css';

function Inventory({isOpen}) {
  const [data, setData] = useState([]);
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/Inventory')
      .then((res) => res.json())
      .then((data) => setData(data))
      .then((response) => {
        const imageBlob = new Blob([response.data], { type: 'image/jpeg' }); // Specify the image type
        const imageUrl = URL.createObjectURL(imageBlob);
        setData({...data, Image:imageUrl})
      })
      .then(console.log(data))
      .catch((error) => console.log('error', error));
  }, []);


  return (
    <div className="inv-back">
      <div className="inventory">
        <div className="invTop">
          <input className="search" type="text" />
          <button className="searchSubmit">Search</button>
          <button onClick={isOpen}>Add</button>
        </div>
        <div className="invBody"></div>
        <div className="tableComp">
          <div className="inventoryTable">
            <table>
              <thead className="tabHead">
                <tr>
                  <th>Image</th>
                  <th>Item Name</th>
                  <th>Item Code</th>
                  <th>Serial Number</th>
                  <th>Description</th>
                  <th>Availability</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <TRow
                    key={row.ItemId}
                    imgURL={row.Image}
                    itemName={row.ItemName}
                    itemNumber={row.ItemCode}
                    serialNumber={row.SerialCode}
                    description={row.Description}
                    availability={row.Availability}
                    status={row.Status}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventory;
