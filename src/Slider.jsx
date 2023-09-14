import './Sidebar.css';

const Slider = ({isOpen,isClose}) => {

  return (
    <div>
       
      <div className={`slide ${isOpen ? 'open': ''}` }>
      
      <div className={`slider ${isOpen ? 'open': ''}`}>
        <button onClick={isClose}>close</button>
      </div>
      <div className='baseSlider' onClick={isClose}></div>
      </div>
    </div>
  );
};




export default Slider;
