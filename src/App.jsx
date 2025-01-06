import './App.css'
import Time from '../src/Adminp'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Shop from '../src/shop'
import { useState } from 'react'
import Sho from './nonecart.jsx'
import M from './mt.jsx'
import Home from '../src/navbarr.jsx'
import Log from '../src/login.jsx'
import Soo from '../src/shop2.jsx'



function App() {
const [cart,setcart]=useState([])
  return (
    <>
     <BrowserRouter>
     {/* <M/> */}
     {/* <Soo/> */}
     <Routes>
      <Route path='/' element={<Home cart={cart} setcart={setcart}/>}/>
      <Route path='/a' element={<Shop cart={cart} setcart={setcart}/> }/>
      <Route path='/b' element={<Sho/>}/>
      <Route path='/home' element={<Time cart={cart} setcart={setcart}/>}/>
      <Route path='/hr' element={<Home cart={cart} setcart={setcart}/>}/>
      <Route path='/login' element={<Log cart={cart} setcart={setcart}/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
