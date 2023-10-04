import React, { useEffect } from 'react';
import { useState } from 'react';
import './BorrowingModal.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Modal = ({ isOpen, onClose,item }) => {
  // const [borrowerName, setBorrowerName] = useState('');
  // const [schoolId, setSchoolId] = useState('');
  // const [purpose, setPurpose] = useState('');
  // const [teacher, setTeacher] = useState('');
  // const [formData, setFormData] = useState({
  //   item,
  //   timestamp: new Date().toISOString(),
  // });


  const [borrow, setBorrowing] = useState({
    ItemCode: item,
    clientName:'',
    schoolId:'',
    purpose:'',
    teacher:'',
    datetime: new Date().toISOString().slice(0, 20).replace('T', ' ')
  })
  
  const [availability, setAvailability] = useState({
    ItemCode:'',
    Availability:''
  })
  const [newVariable, setNewVariable] = useState(item);

  useEffect(() => {
    const newVariable = item;
    setAvailability({...availability, ItemCode:newVariable});
    setBorrowing({...borrow, ItemCode:newVariable})
  }, [item]);
  

    const handleInput = (e) =>{
      e.persist();
      setBorrowing({...borrow, [e.target.name]:e.target.value});
    }
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
      
     const data = borrow;
     const ava = availability;
  try { 
    const response = await fetch('/Available', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  if (response.ok) {
    toast.success('Data submitted successfully');
    setMessage('Data submitted successfully');
        console.log('Data submitted successfully.');

        setBorrowing({
          ItemCode: '',
          clientName:'',
          schoolId:'',
          purpose:'',
          teacher:'',
          datetime: ''
        })
        
        console.log(availability);
      } else {
        toast.error('Error submitting data');
        setMessage('Error submitting data');
        console.log('Data submission failed.');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Error submitting data');
      setMessage('Error submitting data');
    }

    setAvailability({...borrow, Availability:"Borrowed"})
    try { 
      const res = await fetch('/Available', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(ava),
    })
    if (res.ok){
      setMessage('Data submitted successfully');
      console.log('success');
    } else {setMessage('Error submitting data');
  console.log('Failed')}}
     catch (error) {
      console.error('Error:', error);
      toast.error('Error submitting data');
      setMessage('Error submitting data');
    }

};

  if (!isOpen) return null;

  return (
    <div className="body-modal">
      <div className="body-modal-content">
        <button className="body-modal-close" onClick={onClose}>
        &times;
        </button>
        <h1>{item}</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-style">
          <div className="input-container">
            <label >Borrower's Name</label>
            <input type="text" name='clientName' value={borrow.clientName} onChange={handleInput}  placeholder="Enter Name"/>
          </div>
          <div className="input-container">
            <label>School Id</label>
            <input type="text" name='schoolId'  value={borrow.schoolId} onChange={handleInput}  placeholder='School Id'/>
          </div>
          <div className="input-container">
            <label>Purpose</label>
            <input type="text" name='purpose'  value={borrow.purpose} onChange={handleInput}  placeholder='Purpose'/>
          </div>
          <div className="input-container">
            <label>Teacher</label>
            <input type="text" name='teacher'  value={borrow.teacher} onChange={handleInput}  placeholder='Teacher'/>
          </div>
          <div className="input-container">
          <input  type='submit'value="Submit"/>
          </div>
          
        </div>
      </form>
      </div>
    </div>
  );
  };

export default Modal;
