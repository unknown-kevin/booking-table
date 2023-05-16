import React from "react"
import logo_small from "../Images/logo-small.png"

const Footer = () => {
  return(
    <footer>
      <section>
        <div class="footer_image">
          <img src={logo_small} alt="restaurant logo" />
        </div>
        <div>
          <p>Document Navigation</p>
          <ul role="navigation list">
            <li role="list item">Home</li>
            <li role="list item">About</li>
            <li role="list item">Menu</li>
            <li role="list item">Reservations</li>
            <li role="list item">Order Online</li>
            <li role="list item">Login</li>
          </ul>
        </div>
        <div>
          <p>Contact</p>
        <ul role="list">
          <li role="list item">Address</li>
          <li role="list item">Phone Number</li>
          <li role="list item">Email</li>
        </ul>
        </div>
        <div>
          <p>Social Media Links</p>
          <ul role="list">
            <li role="list item">Address</li>
            <li role="list item">Phone Number</li>
            <li role="list item">Email</li>
          </ul>
        </div>
      </section>
    </footer>
  )
}

export default Footer;