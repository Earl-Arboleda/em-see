import React from 'react';
import './App.css';
import Body from './Body'
import Header from './Header';
import Inventory from './Inventory Components/Inventory';
import { useState, useEffect } from 'react';
import Footer from './Footer';
import Slider from './Slider';
import Inv from './Inventory Components/InventoryComponents';
import Add from './Inventory Components/AddModal';
import {}

function App() {
const [pageState, setPageState] = useState()

const body = () => {
  setPageState(() => {
    return(
    <Body/>
  )})
  
}

const inventory = () => {
  setPageState(() => {
    return(
      <Inv/>
    )
  })
}


return(
  <div className='App'>
    <Slider inventory={inventory} body={body}/>
    <Header />
    {pageState}
    <Footer/> 
    {/* <Add/> */}
  </div>
);
}

export default App;
