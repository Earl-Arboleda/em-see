
import './App.css';
import Body from './Body'
import Header from './Header';
import Home from './Home';
import Inventory from './Inventory';
import { useState } from 'react';
import Login from './Login';
import Footer from './Footer';

const login = () =>{
  return(<Header/>)
}

function App({isOpen, isClose}) {

  const [pageState, setPageState] = useState(login)

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
      {pageState}
       
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
      <Footer/>
    </div>
  );
}

export default App;
