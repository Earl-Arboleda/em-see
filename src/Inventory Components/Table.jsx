import "./Table.css";
import TRow from "./TR";
import items from "../Body Contents/ItemList";
import { useState, useEffect } from 'react';





const Table = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/ItemList')
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.log(err));
    },[])


    return(
        <div className="tableComp">
            <div className="inventoryTable">
            <table>
                <thead className="tabHead">
                    <tr> 
                    <th>Image</th>
                    <th>Item Name</th>
                    <th>Item Number</th>
                    <th>Serial Number</th>
                    <th>Description</th>
                    <th>Availability</th>
                    <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((row) => {
                        console.log(row)
                        return(
                    
                        <TRow 
                            key={row.itemId}
                            imgURL={row.image}
                            itemName={row.itemName}
                            itemNumber={row.itemCode}
                            serialNumber={row.serialCode}
                            description={row.description}
                            availability={row.availability}
                            status={row.status}/>
                        );
                    })}
                </tbody>
                </table>

                
            </div>
            
        </div>
    );
};

export default Table;
