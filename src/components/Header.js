import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';
export default function Header(props) {
    const [cartOpen, setCartOpen] = useState(false)
    const changeCart = () => 
        {setCartOpen(!cartOpen)}
        
    
 
    return (
    <header>
        <div>
            <span className='logo'>Coffee Staff</span>
            <ul className='nav'>
                <li>About us</li>
                <li>Our goods</li>
                <li>Contacts</li>
            </ul>
            <FaShoppingCart onClick={changeCart} className={`shop-cart-button ${cartOpen && 'active'}`}/>
        
            {cartOpen && (<div className='shop-cart'>{props.orders.map(el => (<Order key={el.id} item={el}/>))}</div>)}
        </div>
        <div className='presentation'></div>
    </header>
  )
}


