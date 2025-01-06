import React from 'react'
import './time.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Son from './store.json'
import { Link, useNavigate} from 'react-router-dom';
import watcitem from './watchitem.json'
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';


function shop2({ cart, setcart }) {
 const sk =useNavigate()
  const add=()=>{
         sk('/a')

  }

  const home =useNavigate()
  const hom=()=>{
    home('/home')
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className='body sticky-top mt-2 bg-white '>
        <Navbar expand="lg" className="border-0 shadow ">
          <Container fluid>
            <img src="../src/assets/logo.png.webp" alt="TIME>png" onClick={hom} />
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
                <Nav.Link href="" onClick={hom} className='ms-5 home text-dark fs-6'>
                  Home</Nav.Link>
                <Nav.Link href="#action2" className='ms-5 home text-dark fs-6'onClick={add}>Shop</Nav.Link>
                <Nav.Link href="#action2" className='ms-5 home text-dark fs-6'>About</Nav.Link>
                <Dropdown className="dropdown">
                  <Dropdown.Toggle variant="white ms-5 fs-6 mt-1" id="dropdown-basic" >
                    Latest
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Product list</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Product Details</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="dropdown">
                  <Dropdown.Toggle variant="white ms-5 fs-6 mt-1" id="dropdown-basic">
                    Blog
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Blog List</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Blog Details</Dropdown.Item>

                  </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="dropdown">
                  <Dropdown.Toggle variant="white ms-5 fs-6 mt-1" id="dropdown-basic">
                    Pages
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Login</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Cart</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Element</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">COnfirmation</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Product CHeckout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2 search"
                  aria-label="Search"
                />
                <button className='buton rounded border-0 '>Search</button>
              </Form>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person ms-4 person " viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
                  <Link to={'/b'} className='text-dark' > <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart3  ms-4 person me-5" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg></Link>
            </Navbar.Collapse>

          </Container>
        </Navbar>
      </div>
    {/* <div className='container-fluid crt' >
      <h1 className='text-center'>Oooops you didn't Shop any Products</h1>
     <img src="../src/assets/rb_71222.png" alt=""  className='img-fluid ' style={{height:500}}/>

     <br />
     <h1 className='text-center mt-5'>This page is undermaintanence please</h1>
     <h1 className='text-center mt-5'>Go ShopCart</h1>
     </div> */}
<div className='justify-content-end'>
     <Button variant="primary" onClick={handleShow}>
        Launch
      </Button>
      </div>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>

    </>
  )
}

export default shop2