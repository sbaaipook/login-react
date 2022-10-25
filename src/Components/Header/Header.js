import React from 'react'
import "./Header.css"
const Header = () => {
  return (
    <header>
      <a href="#" className='head-title'>Login React</a>
      <ul>
        <li>
          <a href='#'>Sign in</a>
        </li>
        <li>
          <a href='#'>Sign up</a>
        </li>
      </ul>
    </header>
  )
}

export default Header