import React from 'react'
import {Link} from "react-router-dom"
import Logo from "../icons_assets/Logo.svg"

const Footer = () => {
  return (
    <div className="container">
       <footer>
        <div className='grid-item'>
          <img src={Logo} />
        </div>
        <div className='grid-item'>
          <h3 className="footer-heading">Doormat <br/>Navigation</h3>
          <ul className="footer-list">
            <li className="footer-sub"><Link to="/">Home</Link></li>
            <li className="footer-sub"><Link to="/">About</Link></li>
            <li className="footer-sub"><Link to="/">Menu</Link></li>
            <li className="footer-sub"><Link to="/">Reservations</Link></li>
            <li className="footer-sub"><Link to="/">Orderonline</Link></li>
            <li className="footer-sub"><Link to="/">Login</Link></li>
          </ul>
        </div>
        <div className='grid-item'>
        <h3 className="footer-heading">Contact</h3>
         <ul className="footer-list">
         <li className="footer-sub"><Link to="/">Address</Link></li>
            <li className="footer-sub"><Link to="/">PhoneNumber</Link></li>
            <li className="footer-sub"><Link to="/">email</Link></li>
         </ul>
        </div>
        <div className='grid-item'>
        <h3 className="footer-heading"> Social Media <br/> Links</h3>
          <ul className="footer-list">
         <li className="footer-sub"><Link to="/">Address</Link></li>
            <li className="footer-sub"><Link to="/">PhoneNumber</Link></li>
            <li className="footer-sub"><Link to="/">email</Link></li>
         </ul>
        </div>
    </footer>
    </div>
   
  )
}

export default Footer