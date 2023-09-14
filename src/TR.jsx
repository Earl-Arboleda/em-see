
const TRow = (props) => {
    
    return(
        <tr>
           <th><img src={props.imgURL} alt="  "/></th>
           <th>{props.itemName}</th>
           <th>{props.itemNumber}</th>
           <th>{props.serialNumber}</th>
           <th>{props.description}</th>
           <th>{props.availability}</th>
           <th>{props.status}</th>
        </tr>
    );
}
export default TRow;    