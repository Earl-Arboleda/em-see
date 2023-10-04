import "./AddModal.css";
import { useState } from "react";

const Add = ({state}) => {

    let popup = state;

    const [isOpen,setIsOpen] = useState(popup)
    const [imageSrc, setImageSrc] = useState(null);
    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImageSrc(imageUrl);
          }
        };

    function toggleAdd(){
        setIsOpen(popup = !popup);
    }
    
      

    return(
        <div className={`popup ${isOpen ? 'open' : ''}`} onClick={toggleAdd}>
            
            <div className="modal">
                <div className="image">
                {imageSrc && <img src={imageSrc} alt="Uploaded" />}
                </div >
                <div className="forms">
                    <form action="POST" >
                        <input type="file" accept="image/*" onChange={handleFileChange} />
                        <input type="text" placeholder="Item Name" />
                        <input type="text" placeholder="Item Code" />
                        <input type="text" placeholder="Serial Code" />
                        <input type="text" placeholder="Brand" />
                        <input type="text" placeholder="Availability" />
                        <input type="text" placeholder="Status"/>
                        <input id="submit" type="submit" value="Submit"/>
                    </form>
                    </div>
                
            </div>
        </div>
    )
}

export default Add;