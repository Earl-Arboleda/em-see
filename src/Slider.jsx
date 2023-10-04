import './Sidebar.css';
import { useState } from 'react';
import Body from "./Body";
import Home from './Home';
import Inventory from './Inventory';

const Slider = ({isOpen,isClose}) => {
  const [pageState, setPageState] = useState(null)

  function emc(){
    setPageState(()=>{
      return(<Home/>);
    })
  }

  function inventory(){
    setPageState(()=>{
      return(<Inventory/>);
    })
  }



  return (
    <div>
     
       
      <div className={`slide ${isOpen ? 'open': ''}` }>
      
      <div className={`slider ${isOpen ? 'open': ''}`}>
        <button onClick={isClose}>close</button>
        <div className='btnHolder'>
          <button onClick={emc}>EMC</button>
          <button onClick={inventory}>Inventory</button>
          <button>Calendar</button>
        </div>
      </div>
      <div className='baseSlider' onClick={isClose}></div>
      </div>
      {pageState}
    </div>
  );
};




export default Slider;



export default Slider;
