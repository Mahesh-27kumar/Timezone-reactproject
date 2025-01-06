import React, { useState } from 'react'

const mt = () => {
    const [cart,setcart]=useState([])
    const items=[{id:1,name:"poori",description:"this is so good",price:200},
        {id:2,name:"poori",description:"this is so good",price:200},{id:3,name:"poori",description:"this is so good",price:200}
    ]
    const add=(item)=>{
        const ad=cart.find(carte=>carte.id === item.id)
        if(ad){
            const adf=cart.map(carte=>carte.id === item.id ?
                {...carte, quantity:carte.quantity+1}:carte )
                setcart(adf)
        }
        else{
            setcart([...cart,{item, quantity:1}])
        }
    }
    const update=(item,amount)=>{
        const up=cart.map(id=>{
            if(id === item.id)
                {
                  return{...item, quantity:item.quantity+amount}
            }
            return item
         
        })
        const fil=up.filter(item=>
            item.quantity >0
        )
        setcart(fil)
    }
    const remove=(id)=>{
        setcart(cart.filter(item=>item.id !== id))
    }
  return (
    <div>
        <h1>items</h1>
{items.map((item)=>(
    <div>
<h1>{item.name}</h1>
<h2>{item.description}</h2>
<p>{item.price}</p>
<button onClick={()=>add(item)}>Add to cart</button>

        </div>
))}
{cart.length ===0 && <h1>No item yet placed</h1>}
{cart.length !==0 && (
    <div>
{cart.map((item)=>(
    <div key={item.id}>
        <h1>Name:{item.name}</h1>
        <h2>TotalQuantity:{item.quantity}</h2>
        <button onClick={()=>update(item.id,1)}>+</button>
        <button onClick={()=>update(item.id,-1)}>-</button>
        <button onClick={()=>remove(item.id)}>remove</button>

        </div>
))}

        </div>
)}



    </div>
  )
}

export default mt