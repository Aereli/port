import React from 'react'
import Link from 'gatsby-link'
import '../styles/menu.css'

const Menu = () => (
    <>
      <div>
        <ul className="menu-navbar">
          <li><Link to="/" >Home</Link></li>
          <li><Link to="/about" >About</Link></li>
          <li><Link to="/work" >Work</Link></li>
        </ul>
      </div>
    </>
  )

  export default Menu