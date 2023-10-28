import { useEffect, useState } from "react";
import Cards from "./Cards";
// import { useEffect, useState } from "react";


const Available = ({click,button}) => {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:5000/Inventory')
      .then((res) => res.json())
      .then((data) => setData(data))
      .then(console.log(data))
      .catch((error) => console.log('error', error));
  }, []);




  return (
      <div className="wrapper">
      {data.filter(item => item.Availability==='Available').map((item) => {
        return (
          <div className="row" key={item.ItemId}>
            <Cards
              imgUrl={item.Image}
              itemName={item.ItemName}
              itemNumber={item.ItemCode}
              availability={item.Availability}
              button1 = "Borrow"
              button2 = "Reserve"
              borrow = {() => click(item.ItemCode)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Available;
