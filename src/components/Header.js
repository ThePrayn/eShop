import React, { useState } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';
import { Link } from "react-scroll";

const showOrders = (props) => {
    let sum = 0
    props.orders.forEach(el => sum += Number.parseFloat(el.price))
    
    return(
        <div>{props.orders.map(el => <Order onDel={props.onDel} key={el.id} item={el}/>)}
        <p className='sum'>Amount of purchases: {sum}$</p>
        </div>
    )
}

export default function Header(props) {
    const [cartOpen, setCartOpen] = useState(false)
    const changeCart = () => 
        {setCartOpen(!cartOpen)}
        
     
    
 
    return (
    <header>
        <div>
            <span className='logo'>Coffee Staff</span>
            <ul className='nav'>
                <li> <Link to='about' smooth={true} offset={-60} duration={800}> About us </Link> </li>
                <li> <Link to='goods' smooth={true} offset={-60} duration={800} >Our goods</Link></li>
                <li> <Link to='contacts' smooth={true} offset={-60} duration={900}>Contacts</Link></li>
            </ul>
            <FaShoppingCart onClick={changeCart} className={`shop-cart-button ${cartOpen && 'active'}`}/>
        
            {cartOpen && (<div className='shop-cart'>{props.orders.length > 0 ? showOrders(props) : <h2 className='empty'>Cart is empty</h2>} </div>)}
        </div>
        <div className='presentation'></div>
    </header>
  )
}


