import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => (
  <nav>
    <Link to="/">Main</Link>
    <Link to="/contact">Contact</Link>
  </nav>
)

export default Menu