import "./AddModal.css";
import { useEffect, useState } from 'react';
import Popup from './Popup';
import Inventory from './Inventory';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add() {

  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile();
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageSrc(imageUrl);
    }
  };

  
  
    const [imageSrc, setImageSrc] = useState(null);
    
 
       

       
    



    const [item, setItem] = useState({
        ItemName:'',
        ItemCode:'',
        SerialCode: '',
        Description: '',
        Availability:'',
        Status:'',
        Image:''

    })

    const handleInput = (e) => {
        e.persist();
        setItem({...item,[e.target.name]: e.target.value});
    }

    const options = ["","Available", "Borrowed", "Reserved"];
    const status = ["","Functional", "Faulty", "Missing"];
    const [message, setMessage] = useState('');
    const [update, setUpdate] = useState('')
    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = item;
      const formData = new FormData();
      formData.append('image', selectedFile);  
      formData.append('json_data', JSON.stringify({ key: 'value' }));

      try {
        const response = await fetch('/Inventory', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            
          },
          body: JSON.stringify(data),
        });
        setUpdate();
        if (response.ok) {
          toast.success('Data submitted successfully');
          setMessage('Data submitted successfully');

          setItem({
            ItemName: '',
            ItemCode: '',
            SerialCode: '',
            Description: '',
            Availability: '',
            Status: '',
            Image:'',
          });
          
          
        } else {
          toast.error('Error submitting data');
          setMessage('Error submitting data');
        }
      } catch (error) {
        console.error('Error:', error);
        toast.error('Error submitting data');
        setMessage('Error submitting data');
      }
    };
    
    


  return (<>
    <Inventory isOpen={openPopup} updated={setUpdate}/>
    <div className="Sample">
      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <div className="modal">
                <div className="image">
                {imageSrc && <img src={imageSrc} alt="Uploaded" />}
                </div >
                <div className="forms">
                    <form onSubmit={handleSubmit} >
                        <input type="file" onChange={handleFileChange} accept="image/*" />
                        <input type="text" name="ItemName" value={item.ItemName} onChange={handleInput} required placeholder="Item Name" />
                        <input type="text" name="ItemCode" value={item.ItemCode} onChange={handleInput} required placeholder="Item Code" />
                        <input type="text" name="SerialCode" value={item.SerialCode} onChange={handleInput} required placeholder="Serial Code" />
                        <input type="text" name="Description" value={item.Description} onChange={handleInput} placeholder="Brand" />
                        <select  name="Availability" value={item.Availability}  onChange={handleInput}>
                            {options.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                            ))}
                        </select>
                        <select  name="Status" value={item.Status} onChange={handleInput}>
                            {status.map((stat, index) => (
                            <option key={index} value={stat}>
                                {stat}
                            </option>
                            ))}
                        </select>
                        {/* <input type="text" name="Availability" value={item.Availability} onChange={handleInput} required placeholder="Availability" /> */}
                        <input id="submit" type="submit" value="Submit"/>
                    </form>
                    </div>
                
            </div>
      </Popup>
    </div>
    </>
  );
}


export default Add;
