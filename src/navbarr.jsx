import React, { useState } from 'react'
import { useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './time.css'
import Son from '../src/store.json'
import { Link, useNavigate } from 'react-router-dom';
import watcitem from '../src/watchitem.json'
import { Navigate } from 'react-router-dom';
import { GoMoveToTop } from "react-icons/go";
import Offcanvas from 'react-bootstrap/Offcanvas';
import gsap from 'gsap';
import { use } from 'react';
import { LuPackage } from "react-icons/lu";
import { MdLockOpen } from "react-icons/md";
import { RiRefreshLine } from "react-icons/ri";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialPinterest } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaHandHoldingHeart } from "react-icons/fa";
function navbarr({ cart, setcart }) {
  const remove = (id) => {
    setcart(cart.filter(item => item.id !== id))
  }
  const update = (id, amount) => {
    const up = cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + amount }

      }
      return item
    })
    const fil = up.filter(item =>
      item.quantity > 0
    )
    setcart(fil)
  }
  const total = cart.reduce((sum, item) =>
    sum + item.quantity, 0)
  const price = cart.reduce((sum, item) =>
    sum + item.quantity * item.Watchprice, 0)

  const [item, setItem] = useState(Son)
  const [watchitem, setWatchitem] = useState(watcitem)
  const sk = useNavigate()
  const add = () => {
    sk('/a')

  }
  const mk = useNavigate()
  const mer = () => {
    mk('/')

  }
  const home = useNavigate()
  const homee = () => {
    home('/hr')
  }
  const log = useNavigate()
  const login = () => {
    log('/login')
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const textRef = useRef(null);
  useEffect(() => {
    // GSAP animation when the component mounts
    gsap.fromTo(
      textRef.current, // Target element
      { opacity: 0, x: -100 }, // Initial state
      { opacity: 1, x: 0, duration: 2, ease: "power3.out" } // Final state and animation settings
    );
  }, []);
  const textReff = useRef(null);
  useEffect(() => {
    // GSAP animation when the component mounts
    gsap.fromTo(
      textReff.current, // Target element
      { opacity: 0, x: -100 }, // Initial state
      { opacity: 1, x: 0, duration: 2, ease: "power3.out" } // Final state and animation settings
    );
  }, []);

  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className='body sticky-top mt-2 bg-white '>
        <Navbar expand="lg" className="border-0 shadow ">
          <Container fluid>
            <img src="/src/assets/logo.png.webp" alt="TIME>png" onClick={homee} />
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
                <Nav.Link href="" onClick={homee} className='ms-5 home text-dark fs-6' id='88'>
                  Home</Nav.Link>
                <Nav.Link href="#action2" className='ms-5 home text-dark fs-6' onClick={add}>Shop</Nav.Link>
                <Nav.Link href="#action2" className='ms-5 home text-dark fs-6'>About</Nav.Link>
                <Dropdown className="dropdown">
                  <Dropdown.Toggle variant="white ms-5 fs-6 mt-1" id="dropdown-basic" >
                    Latest
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#1">Product list</Dropdown.Item>
                    <Dropdown.Item href="#2">Product Details</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person ms-4 person " onClick={login} viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
              {/* <Link  className='text-dark' onClick={handleShow} > <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart3  ms-4 person me-5" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg></Link> */}
            </Navbar.Collapse>

          </Container>
        </Navbar>
      </div>
      <div className="container-fluid border-0 shadow" id='99'>
        <div className="row">
          <div className="classs col-md-6  " ref={textReff}>
            <div className='child'>
              <div className='f1'>
                <h1 > Select your New</h1>
                <h1 className='f2'>Perfect Style</h1>
              </div>
              <p className='pp '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa voluptate provident, incidunt obcaecati fuga nesciunt minus quisquam repudiandae aliquam, quaerat, autem necessitatibus. Similique dolores sequi illum excepturi quasi minima dolor.</p>
              <button className='bb' onClick={add}>ShopNow →</button>
            </div>
          </div>
          <div className="class2 col-md-6 d-md-block d-none">
            <img src="../src/assets/watch.png.webp" alt="Watch.png" className='img-fluid ms-5' ref={textRef} />
          </div>
        </div>
      </div>
      <div className="head mt-5">
        <h1 className='headding1'>New Arrivals</h1>
      </div>
      <div className="container-fluid ">
        <div className='row justify-content-around'>
          {item.map((item) => (

            <div className='col-md-3 mt-5 '>
              <Card style={{ width: '18rem' }} className='border-0 shadow rounded '>
                <Card.Img variant="top" src={item.Image} className='item' />
                <Card.Body>
                  <Card.Title className='itemname'>{item.Name}</Card.Title>
                  <Card.Text className='price '>{item.price}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}

        </div>
      </div>
      <div className='container-fluid mt-5 gg border-0 shadow d-md-block d-none' id='2'>
        <div className='row ms-5 '>
          <div className='col-md-4 ms-5 row1'>
            <img src="../src/assets/grid1.jpeg" alt="" className='img-fluid' />
          </div>
          <div className='col-md-3 row2'>
            <img src="../src/assets/grid2.jpg" alt="" className='img-fluid' />
          </div>
          <div className='col-md-3 row3'>
            <div className='container-fluid'>
              <div className='row'>
                <img src="../src/assets/grid3.jpg" alt="" className='img-fluid' />
              </div>
              <div className='row mt-4 row4' >
                <img src="../src/assets/grid4.webp" alt="" className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className='p1 text-center' id='1'>Popular Items</h1>
      <p className='p2 text-center'>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore <br /> magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

      <div className="container-fluid">
        <div className="row " >
          {watchitem.map((watchitem) => (
            <div className='col-md-2 mt-5 cardss'>
              <Card style={{ width: '18rem' }} className='border-0'>
                <Card.Img variant="top" src={watchitem.Watcimg} className='border shadow' />
                <Card.Body>
                  <Card.Title style={{ fontFamily: 'time', fontSize: '22px' }}>{watchitem.Watchname}</Card.Title>
                  <Card.Text className='price '>{watchitem.Watchprice}₹
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="viewproduct text-center" onClick={add}><p >View More Product</p>
      </div>
      <div className='container-fluid fut d-md-block d-none'>
        <div className="row ft">
          <div className='logopng col-md-3 ms-5'>
            <LuPackage className='bx text-white' /><br />
            <h5 className='mt-3 ms-3 text-white'>Free Shipping Method </h5>
            <p className='mt-3 ms-3 text-secondary fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          <div className='logopng col-md-3 ms-5'>
            <MdLockOpen className='bx text-white' /><br />
            <h5 className='mt-3 ms-2 text-white'>Secure Payment System</h5>
            <p className='mt-3 ms-3 text-secondary fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>
          <div className='logopng col-md-3 ms-5'>
            <RiRefreshLine className='bx text-white' /><br />
            <h5 className='mt-3 ms-2 text-white'>Secure Payment System</h5>
            <p className='mt-3 ms-3 text-secondary fs-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
          </div>

        </div>
      </div>
      <div className="container-fluid ">
        <div className="row ">
          <div className='fotr col-md-3 order-1'>
            <img src="../src/assets/logo.png.webp" />
            <p className='ms-2 mt-3 text-secondary'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, commodi cumque! Maiores soluta quas mollitia nulla optio, molestiae sequi esse, quidem, quod animi eveniet. Natus soluta esse quisquam reiciendis libero!</p>
          </div>
          <div className='fot col-md-2 order-2'>
            <h3 className='ms-2'>Quick Links</h3>
            <ul className=' gl'>
              <li className='g1'>Home</li>
              <li className='g1'>Shop</li>
              <li className='g1'>About</li>
              <li className='g1'>Latest</li>
            </ul>
          </div>
          <div className='fot col-md-3  order-3'>
            <h3 className='ms-2'>Contact Us</h3>
            <ul >
              <li className='ole text-danger'><TiSocialFacebookCircular /></li>
              <li className='ole text-danger'><TiSocialLinkedin /></li>
              <li className='ole text-danger' ><TiSocialPinterest /></li>
              <li className='ole text-danger'><FaInstagram /></li>
              <li className='ole text-danger'><IoLogoWhatsapp /></li>
            </ul>
          </div>
          <div className='fot col-md-3 order-4'>
            <h3 className=' ms-5'>Made love with <FaHandHoldingHeart  className='text-danger'/></h3>
           <a href="" className='mah'><p className='ma'>Mahesh</p></a>
          </div>
        </div>
      </div>


      <a href="#99"><button className='sidefix rounded-pill' ><GoMoveToTop /></button></a>

    </>
  )
}

export default navbarr