import React from 'react'
import logo from "../public/images/oodi.svg"
import hero from "../public/images/Intersect.svg"
import img from "../public/images/pngwing 4.svg"
import salat from "../public/images/Fattoush salad.svg"
import person from "../public/images/Mask group.svg"
import logos from "../public/images/fi-rr-gift.svg"
const App = () => {
  return (
    <div>
      <nav>
        <img src={logo} alt="logo" />

        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Offers</a>
          </li>
        </ul>

        <button className='b1'>Contact</button>
      </nav>

      <header>
        <div className="text">
          <h1 className='x1'>Dive into Delights Of Delectable <span>Food</span></h1>
          <p className='p1'>Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>
          <div className="tex">
            <button className='b1'>Order Now</button>
            <h3 className='x2'>Watch Video</h3>
          </div>
        </div>
        <img src={hero} alt="" />
      </header>
      <div className="container">
        <div className="text2">
          <h1 className='x3'>Customer Favorites</h1>
          <h1 className='x4'>Popular Catagories</h1>
          <div className="con">
            <div className="box">
              <img className='img' src={img} alt="logo" />
              <h1 className='x5'>Main Dish</h1>
            </div>
            <div className="box">
              <img className='img' src={img} alt="logo" />
              <h1 className='x5'>Main Dish</h1>
            </div>
            <div className="box">
              <img className='img' src={img} alt="logo" />
              <h1 className='x5'>Main Dish</h1>
            </div>
            <div className="box">
              <img className='img' src={img} alt="logo" />
              <h1 className='x5'>Main Dish</h1>
            </div>
          </div>
        </div>
      </div>


      <div className="container2">
        <p className='p2'>Special Dishes</p>
        <h1 className='x6'>Standout Dishes From Our Menu</h1>
      </div>

      <div className="container3">
        <div className="box2">
          <img className='i1' src={salat} alt="logo" />
          <h3 className='x7'>Fattoush salad</h3>
          <p className='p3'>Description of the item</p>
        </div>
        <div className="box2">
          <img className='i1' src={salat} alt="logo" />
          <h3 className='x7'>Fattoush salad</h3>
          <p className='p3'>Description of the item</p>
        </div>
        <div className="box2">
          <img className='i1' src={salat} alt="logo" />
          <h3 className='x7'>Fattoush salad</h3>
          <p className='p3'>Description of the item</p>
        </div>
      </div>
      <div className="container4">
        <img src={person} alt="logo" />
        <div className="con2">
          <p className='p2'>Testimonials</p>
          <h1 className='x8'>What Our Customers Say About Us</h1>
          <p className='p4'>“I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! The attention to detail in presentation and service was impeccable”</p>
        </div>
      </div>

      <div className="container5">
        <div className="text-box">
          <p className='p2'>Our Story & Services</p>
          <h1 className='x9'>Our Culinary Journey And Services</h1>
          <p className='p5'>Rooted in passion, we curate unforgettable dining experiences and offer exceptional services, blending culinary artistry with warm hospitality.</p>
          <button className='b1'>Explore</button>
        </div>
        <div className="con3">
          <div className="box3">
            <img className='i2' src={logos} alt="logo" />
            <h1 className='x9'>Gift Cards</h1>
            <p className='p6'>Give the gift of exceptional dining with Foodi Gift Cards</p>
          </div>
          <div className="box3">
            <img className='i2' src={logos} alt="logo" />
            <h1 className='x9'>Gift Cards</h1>
            <p className='p6'>Give the gift of exceptional dining with Foodi Gift Cards</p>
          </div>
          <div className="box3">
            <img className='i2' src={logos} alt="logo" />
            <h1 className='x9'>Gift Cards</h1>
            <p className='p6'>Give the gift of exceptional dining with Foodi Gift Cards</p>
          </div>
          <div className="box3">
            <img className='i2' src={logos} alt="logo" />
            <h1 className='x9'>Gift Cards</h1>
            <p className='p6'>Give the gift of exceptional dining with Foodi Gift Cards</p>
          </div>
        </div>
      </div>

      <footer>
        <p className='p7'>Copyright 2023 Dscode | All rights reserved</p>
      </footer>
    </div>
  )
}

export default App