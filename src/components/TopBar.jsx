import React from 'react'
import './TopBar.css'
import logo from '../assets/logo_hwadan.png'

const TopBar = () => {
  return (
    <div className='TopBar'>
        <div className='topLogo'>
          <img src={logo} alt='화단' className='logoImg' />
        </div>
    </div>
  )
}

export default TopBar