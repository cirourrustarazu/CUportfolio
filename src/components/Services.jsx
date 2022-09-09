import React from 'react'
import '../css/Services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>WEB</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Personal websites, companies, news, blogs, events, fully manageable from a private section that I developed entirely.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Systems</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Customized systems based on your specific needs and carried out so that you have the most efficient product to work in your company.</p>
            </li>
            
          </ul>
        </article>
        {/* WWEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>E-Commerce</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon"/>
              <p>E-commerce sites designed for customer usability and always adapted to your business, stock control, orders and customer management integrated into the site administration.</p>
            </li>
          
          </ul>
        </article>
        {/* CONTENT CREATOR */}
      </div>
    </section>
  )
}

export default Services