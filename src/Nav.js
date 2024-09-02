import React from 'react'
import { Link } from 'react-router-dom'
import "./App.css"


const Nav = () => {
  return (
    <nav>
        <ul className="nav-list">
                <li className="nav-sub">  <img src="../icons_assets/Logo.svg" alt="logo"/></li>          
  <li className="nav-sub"> <Link to="/">Home</Link></li>
 
  <li className="nav-sub"> <Link to="/about">About</Link></li>
 

    <li className="nav-sub"> <Link to="/menu">Menu</Link></li>
   
     <li className="nav-sub"> <Link to="/reservations">Reservations</Link></li>
   
 <li className="nav-sub"> <Link to="/orderonline">OrderOline</Link></li>
   <li className="nav-sub"> <Link to="/login">Login</Link></li>
 </ul>



    </nav>
  )
}

export default Nav