import "./Inventory.css";
import Table from "./Table";
import { useState } from "react";

const Inventory = ({click}) => {
    // const [InvState, SetInvState] = useState();

   
    return(
        <div className="inventory">
            <div className="invTop">
                <input className="search" type="text"/>
                <button className="searchSubmit">Search</button>
                <button onClick={click}>Add</button>
                
            </div>
        <div className="invBody"></div>
        <Table/>
        </div>

    );
}

export default Inventory;