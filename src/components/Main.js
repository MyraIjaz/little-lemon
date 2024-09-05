import React from 'react'
import salad from "../icons_assets/greek.jpg"
import bruchetta from "../icons_assets/bruchetta.svg"
import lemon from "../icons_assets/lemon dessert.jpg"
import {FaBiking} from "react-icons/fa"
const Main = () => {
  return (
    <div className="container-main">
<main id="menu">
<ul className="main-list">
  <li className="main-item">This week's Special</li>
  <li ><button className="main-button"><span>OnlineMenu</span></button></li>
</ul>
<div className="cards">
<article className="card">
  <img src={salad} alt="salad" className="menu-img"/>
  <ul className="menu-list">
    <li className="menu-title">Greek Salad</li>
    <li className="menu-price">$20.00</li>
  </ul>
    <p className="para">
    Crisp lettuce, fresh peppers, olives, and Chicago-style feta cheese, all garnished with crunchy garlic, make a refreshing Greek salad.</p>
  <ul className="menu-delivery">
    <li>
    <button className="card-btn">Order & Delivery</button>
    </li>
    <li>
<FaBiking/>
    </li>
  </ul>
</article>
<article className="card">
  <img src={bruchetta} alt="salad" className="menu-img"/>
  <ul className="menu-list">
    <li className="menu-title">Bruchetta</li>
    <li className="menu-price">$5.99</li>
  </ul>
    <p className="para">Toasted baguette slices topped with ripe tomatoes, basil, garlic, and a drizzle of balsamic glaze for a savory, tangy appetizer.</p>
  <ul className="menu-delivery">
    <li>
    <button className="card-btn">Order & Delivery</button>
    </li>
    <li>
<FaBiking/>
    </li>
  </ul>
 

</article>
<article className="card">
  <img src={lemon} alt="salad" className="menu-img" />
  <ul className="menu-list">
    <li className="menu-title">Lemon dessert</li>
    <li className="menu-price">$5.00</li>
  </ul>
    <p className="para">Silky lemon mousse with a hint of mint and powdered sugar, offering a refreshing blend of tartness and sweetness in every bite.</p>
  <ul className="menu-delivery">
    <li>
    <button className="card-btn">Order & Delivery</button>
    </li>
    <li>
<FaBiking/>
    </li>
  </ul>
 

</article>


</div>

</main>
    </div>
  )
}

export default Main