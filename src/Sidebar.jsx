import { useState } from "react";
import Slider from "./Slider";

export default function Sidebar(){
  const [sliderState,setSliderState] = useState(false);
  
  function toggleSlider(){
    setSliderState(!sliderState)
  }

  return(
    <div className="side">
      
      <button className="sideBtn" onClick={toggleSlider}></button>
    <Slider isOpen = {sliderState} isClose = {toggleSlider}/>
    
    </div>

  );
}