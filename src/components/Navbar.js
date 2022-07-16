import React from 'react'
import {FaShoppingCart} from "react-icons/fa"
import { useGlobalContext } from './Context'


const Navbar = () => {
    const {itemCount}=useGlobalContext()
  return (
    <div className='navbar-container'>
        <h1>Shopping Cart</h1>
        <div className='cart-icon'>
        <FaShoppingCart/>
        <p className='item-number'>{itemCount}</p>
        </div>
    </div>
  )
}

export default Navbar

