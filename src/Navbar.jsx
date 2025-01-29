import React from 'react'
import './time.css'
import { useState } from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  
    // Handlers to show and hide dropdown
    const showDropdown = () => setIsDropdownVisible(true);
    const hideDropdown = () => setIsDropdownVisible(false);
  return (
    <>
    <div className='body'>
   <nav className="navbar  navbar-expand-lg border-0 shadow ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="logo.png.webp" alt="Timezone.png" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse con1 " id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-3" href="#">Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active ms-3" href="#">About</a>
        </li>
        <li className="nav-item">
        <div
      className="dropdown-container me-1 ms-3"
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <button className="dropdown-button bg-white text-dark border-0 ">Latest</button>

      {isDropdownVisible && (
        <div className="dropdown-menu" style={dropdownMenuStyles}>
          <a href="#" style={dropdownItemStyles}>Product List</a>
          <a href="#" style={dropdownItemStyles}>Product details</a>
          
        </div>
      )}
    </div>
        </li>
        <li>
        <div
      className="dropdown-container"
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <button className="dropdown-button bg-white text-dark border-0">Blog</button>

      {isDropdownVisible && (
        <div className="dropdown-menu" style={dropdownMenuStyles}>
          <a href="#" style={dropdownItemStyles}>Blog list</a>
          <a href="#" style={dropdownItemStyles}>Blog Details</a>
          
        </div>
      )}
    </div>
        </li>
        <li>
        <div
      className="dropdown-container"
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
      style={{ position: 'relative', display: 'inline-block' }}
    >
      <button className="dropdown-button bg-white text-dark border-0">Pages</button>

      {isDropdownVisible && (
        <div className="dropdown-menu" style={dropdownMenuStyles}>
          <a href="#" style={dropdownItemStyles}>Login</a>
          <a href="#" style={dropdownItemStyles}>Cart</a>
          <a href="#" style={dropdownItemStyles}>Element</a>
          <a href="#" style={dropdownItemStyles}>Confirmation</a>
          <a href="#" style={dropdownItemStyles}>Product Checkout</a>
        </div>
      )}
    </div>
        </li>
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

    </>
    
  )
}
const dropdownMenuStyles = {
  position: 'absolute',
  top: '100%',
  left: '0',
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
  padding: '10px',
  zIndex: 1,
};

const dropdownItemStyles = {
  display: 'block',
  padding: '8px 16px',
  color: '#333',
  textDecoration: 'none',
};
    
    
    

export default Navbar