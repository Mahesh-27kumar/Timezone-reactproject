import React, { useState } from 'react'

import Watcitem from '../src/watchitem.json'
import Button from 'react-bootstrap/Button';
import './time.css'
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './time.css'
import { Link, useNavigate } from 'react-router-dom';
import watcitem from '../src/watchitem.json'
import { BsBagPlusFill } from "react-icons/bs";
import { IoBagRemove } from "react-icons/io5";
import { GoMoveToTop } from "react-icons/go";


const shop = ({cart,setcart}) => {
  const [show, setShow] = useState(false);
  // const [cart,setcart]=useState([])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

   const [item,setitem]=useState(Watcitem)
   const add=(item)=>{
    const ad=cart.find(carte=>carte.id === item.id)
     if(ad){
      const adf=cart.map(carte=>carte.id === item.id ?
        {...carte, quantity:carte.quantity+1}:carte)
        setcart(adf)
     }
     else{
      setcart([...cart,{...item,quantity:1}])
     }
     alert(`${item.Watchname} added to cart 'pls check your cart'`)
   }
   const remove=(id)=>{
    setcart(cart.filter(item=>item.id !== id))
  }
   const update=(id,amount)=>{
    const up=cart.map(item=>{
      if(item.id === id){
        return{...item, quantity:item.quantity+amount}

      }
      return item
    })
    const fil= up.filter(item=>
      item.quantity>0
    )
    setcart(fil)
  }
  const total=cart.reduce((sum,item)=>
    sum + item.quantity,0)
    const price=cart.reduce((sum,item)=>
     sum + item.quantity * item.Watchprice,0)
      const home =useNavigate()
      const homee=()=>{
        home('/hr')
      }
       const log=useNavigate()
        const login=()=>{
          log('/login')
        }
      
  return (
    <>


      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className='text-danger'>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
{cart.length ==0 && (<div className='emtycart'>
  <img src="../src/assets/rb_77594.png" alt="" className='img-fluid'/>
  <h1>Your Cart is Empty</h1>
  </div>
)}
{cart.length >0 && (
  <div>
    <p>Vanakam</p>
    {cart.map((item)=>(
      <div key={item.id}>
        <h1>{item.Watchname}</h1>
        <img src={item.Watcimg} style={{width:100,height:100}}></img>
        <h2>Quantity:{item.quantity}</h2>
        <div className='d-flex '>
        <button onClick={()=>update(item.id,1)} className='rounded border-1 text-danger shadow'><BsBagPlusFill /></button>
        <button onClick={()=>update(item.id,-1)}><IoBagRemove /></button>
        <button onClick={()=>remove(item.id)}>remove</button>

</div>
        </div>
    ))}
    <p>Total{total}</p>     <p>price{price}</p> 
  </div>
 )}
        </Offcanvas.Body>
    </Offcanvas> 




    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className='body sticky-top mt-2 bg-white'>
        <Navbar expand="lg" className="border-0 shadow ">
          <Container fluid>
            <img src="../src/assets/logo.png.webp" alt="TIME>png" onClick={homee}/>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll>
                <Nav.Link href="" onClick={homee} className='ms-5 home text-dark fs-6'>
                  Home</Nav.Link>
                <Nav.Link href="#action2" className='ms-5 home text-dark fs-6'onClick={add}>Shop</Nav.Link>
                <Nav.Link href="#action2" className='ms-5 home text-dark fs-6'>About</Nav.Link>
                {/* <Dropdown className="dropdown">
                  <Dropdown.Toggle variant="white ms-5 fs-6 mt-1" id="dropdown-basic" >
                    Latest
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#1">Product list</Dropdown.Item>
                    <Dropdown.Item href="#2">Product Details</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
              </Nav>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" onClick={login} className="bi bi-person ms-4 person " viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
                  <Link onClick={handleShow} className='text-dark' > <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart3  ms-4 person me-5 " viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg></Link>
            </Navbar.Collapse>

          </Container>
        </Navbar>
      </div>
      {/* <div className=''>
        <button type='button' className='btn btn-danger' onClick={handleShow}> summa</button>
      </div> */}

      <h1 className='text-center mt-5' id='99'>All Products</h1>
    <div className='container-fluid '>
      <div className='row  d-flex cardrow '>
        {item.map((item)=>(
<div className='col-12 col-md-4  mt-5 border-0 shadow cardcart' >
       
    <Card style={{ width: '18rem' }} className='crd'>
      <Card.Img variant="top" src={item.Watcimg} />
      <Card.Body className='text-center'>
        <Card.Title>{item.Watchname}</Card.Title>
        <Card.Text>
          <h1>{item.Watchprice}₹</h1>
        </Card.Text>
        
        <div className="ti" onClick={()=>add(item)}><p >ADD TO CART</p></div>
      </Card.Body>
    </Card>
    </div>
     ))}
    </div>
    </div>
<a href="#99"><button className='sidefix rounded-pill' ><GoMoveToTop /></button></a>

    </>
  )
}

export default shop