import React, { useState } from 'react';

const Item = ({ item }) => {
  
  const [cartItems, setCartItems] = useState([]);
 
  const addToOrder = (item) => {
    setCartItems([...cartItems, item])  
    console.log(item)
    
  }
  return (
    <div className='item'>
        <img alt='coffee' src={'./img/' + item.img}/>
        <h2>{item.title}</h2>
        <p>{item.desc}</p>
        <b>{item.price}$</b>

        <button className='add-to-card' onClick={() => addToOrder(item)} >+</button>
        
    </div>
  )
}

export default Item;