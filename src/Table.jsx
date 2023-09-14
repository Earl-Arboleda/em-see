import "./Table.css";
import TRow from "./TR";
import items from "./ItemList";

let count = 0;


const Table = () => {
    return(
        <div className="tableComp">
            <div className="inventoryTable">
                <table>
                        <tr>
                            <th>Image</th>
                            <th>Item Name</th>
                            <th>Item Number</th>
                            <th>Serial Number</th>
                            <th>Description</th>
                            <th>Availability</th>
                            <th>status</th>
                        </tr>
                        {/* </table> */}
                        
                        {items.map((row) => {
                            console.log(row)
                            return(
                        
                            <TRow 
                                key={row.itemN}
                                imgURL={row.imgURL}
                                itemName={count++}
                                itemNumber={row.itemNumber}
                                serialNumber={row.serialNumber}
                                description={row.description}
                                availability={row.availability}
                                status={row.status}/>
                            );
                        })}

</table>
                
            </div>
            
        </div>
    );
};

export default Table;