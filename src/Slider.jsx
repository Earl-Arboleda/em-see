import React, { useState } from 'react';
import './Sidebar.css';

// Sidebar Component
const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button onClick={onClose}>Close Sidebar</button>
      {/* Add your sidebar content here */}
    </div>
  );
};

// Parent Component
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="slider">
        <div className='sb'>
             <button onClick={toggleSidebar}></button>
        </div>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      {/* Your main content */}
    </div>
  );
}

export default App;
