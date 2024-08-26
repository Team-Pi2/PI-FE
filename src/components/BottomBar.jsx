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
            <div className='material-symbols-outlined barImg'>deceased</div>
            <div className='BarText'>Florist</div>
          </Link>
        </div>
        <div className='BarMenu'>
          <Link to='/plants'>
            <div className='material-symbols-outlined barImg'>import_contacts</div>
            <div className='BarText'>Planting</div>
          </Link>
        </div>
        <div className='BarMenu'>
          <Link to='/store'>
            <div className='material-symbols-outlined barImg'>storefront</div>
            <div className='BarText'>Store</div>
          </Link>
        </div>
        <div className='BarMenu'>
          <Link to='/communities'>
            <div className='material-symbols-outlined barImg'>forum</div>
            <div className='BarText'>Chat</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BottomBar