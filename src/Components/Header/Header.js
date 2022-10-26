import React from 'react'
import "./Header.css"
const Header = props => {
  return (
    <header>
      <a href="/" className='head-title'>Login <span>React</span></a>
      <ul>
        <li>
          <button onClick={props.signinClick} className="a">Se connecter</button>
        </li>
        <li>
          <button className="a" onClick={props.signupClick} >S'inscrire</button>
        </li>
      </ul>
    </header>
  )
}

export default Header