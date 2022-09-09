import React from 'react'
import Logo from '../../Assets/Icons/react.png'
import './Nav.css'

const Nav = () => {
  return (
    <div>
        <nav>
          <div className='logo-home'>
            <h1>Zona de pruebas</h1>
            <img src={Logo} alt="" />
          </div>
          <div className='menu-home'>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">About</a></li>
            </ul>
          </div>
        </nav>
    </div>
  )
}

export default Nav