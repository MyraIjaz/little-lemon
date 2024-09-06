import React from 'react'
import "./About.css"
import Mario from "../icons_assets/Mario and Adrian A.jpg"
import Adrian from "../icons_assets/Mario and Adrian b.jpg"

const About = () => {
  return (
  <>
   <h1 className="about-heading">About Us</h1>
        <div id="about" className="sections">
            <div className="section-one">
            <h1 className="title">Little Lemon</h1>
<h2 className="city_one">Chicago</h2>
<p className="description">We are a family owned Mediterranean<br/>
 restaurant, focused on traditional<br/> 
 recipes served with modern twist.</p>
            </div>
            <div className="section-two">    
           <ul className="section-two_list"> 
            <li className="section-list_one">  <img src={Mario} className="mario-img"/></li>
            
            <li className="section-list_two">  <img src={Adrian}  className="mario-img"/></li>
           </ul>
       
            </div>
        </div>
     
  </>
     
  )
}

export default About