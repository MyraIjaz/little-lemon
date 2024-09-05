import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"
import Logo from "../icons_assets/Logo.svg"
import { useState } from 'react'
import {FaBars} from "react-icons/fa"


const Nav = () => {
  const[isOpen, setIsOpen] =useState(false);
  const toggleMenu=()=>{
    setIsOpen(!isOpen)
  }

  return (
    <div className="container">

       <nav className="dvs-header">
        <ul className="d-flex wrap justify-between align-center">
                <li>  <img src={Logo} alt="logo"/></li> 
                <li className="dvs-header__trigger" onClick={toggleMenu}><FaBars/></li>
                
               <li className={`dvs-header__menuItems ${isOpen ? "is-open":""} `}>
                <ul>
                <li className="nav-sub"> <Link to="/">Home</Link></li>
 
 <li className="nav-sub"> <Link to="/about">About</Link></li>


   <li className="nav-sub"> <a href="#menu">Menu</a></li>
  
    <li className="nav-sub"> <Link to="/reservations">Reservations</Link></li>
  
<li className="nav-sub"> <Link to="/orderonline">OrderOline</Link></li>
  <li className="nav-sub"> <Link to="/login">Login</Link></li>
               </ul>
               </li>

                 </ul>
</nav>
    </div>
   
  )
}

export default Nav