import "./Inventory.css";
import Header from "./Header";
import Table from "./Table";

const Inventory = () => {
    return(
        <div className="inventory">
            <div className="invTop">
                
                
                <button>Add</button>
                <button>Search</button>
                <input></input>
            </div>
        <div className="invBody"></div>
        <Table/>
        </div>

    );
}

export default Inventory;