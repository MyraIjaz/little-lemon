import React from 'react'
import food from '../icons_assets/food.jpg'

const Header = () => {
  return (
        <div className="container">
<header>
  <div className="header-left">
<h1 className="title">Little Lemon</h1>
<h2 className="city">Chicago</h2>
<p className="description">We are a family owned Mediterranean<br/>
 restaurant, focused on traditional<br/> 
 recipes served with modern twist.</p>
 <button className="reserve-button">Reserve a Table</button>
  </div>
  <div className="header-right">
 <img src={food} className="chef-img"/>
  </div>
</header>
      </div>
  
  )
}

export default Header