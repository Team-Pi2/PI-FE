import React from 'react'
import BarImg from '../assets/star.png'
import './BottomBar.css'
import { Link } from 'react-router-dom'

const BottomBar = () => {
  return (
    <div className='BottomBar'>
      <div className='BottomBarContainer'>
        <div className='BarMenu'>
          <Link to='/'>
            <img src={BarImg} alt='main' className='barImg' />
            <div className='BarText'>Main</div>
          </Link>
        </div>
        <div className='BarMenu'>
          <img src={BarImg} alt='plant' className='barImg'  />
          <div className='BarText'>Plant</div>
        </div>
        <div className='BarMenu'>
          <img src={BarImg} alt='store' className='barImg'  />
          <div className='BarText'>Store</div>
        </div>
        <div className='BarMenu'>
          <img src={BarImg} alt='talk' className='barImg'  />
          <div className='BarText'>Talk</div>
        </div>
      </div>
    </div>
  )
}

export default BottomBar