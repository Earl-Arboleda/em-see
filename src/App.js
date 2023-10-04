import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'; // Import Link from react-router-dom
import Body from './Body';
import Header from './Header';
import Slider from './Slider';
import Footer from './Footer';
import Add from './Inventory Components/AddModal';
import Available from './Body Contents/List';
import Borrow from './Body Contents/Borrowed';
import Reserved from './Body Contents/Reserved';
import Login from './Login component/LoginPage';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className='App'>
      <Slider/>
      <Header />
      <ToastContainer />

      
      <Routes>
      <Route path='/' element={<Body/>}>
      <Route path='Available' element={<Available/>} />
        <Route path='Borrowed' element={<Borrow />} />
        <Route path='Reserved' element={<Reserved/>} />
        <Route path='History' element={null} />
        </Route>
   
        <Route path='/Inventory' element={<Add/>}>
          </Route>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
