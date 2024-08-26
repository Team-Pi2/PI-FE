import React from 'react'
import './BottomBar.css'
import { Link, useLocation } from 'react-router-dom'

const BottomBar = () => {

  const location = useLocation()


  return (
    <div className='BottomBar'>
      <div className='BottomBarContainer'>
        <div className={`BarMenu ${location.pathname === '/' ? 'active' : ''}`}>
          <Link to='/'>
            <div className='material-symbols-outlined barImg'>deceased</div>
            <div className='BarText'>꽃다발</div>
          </Link>
        </div>
        <div className={`BarMenu ${location.pathname === '/plants' ? 'active' : ''}`}>
          <Link to='/plants'>
            <div className='material-symbols-outlined barImg'>import_contacts</div>
            <div className='BarText'>식물정보</div>
          </Link>
        </div>
        <div className={`BarMenu ${location.pathname === '/store' ? 'active' : ''}`}>
          <Link to='/store'>
            <div className='material-symbols-outlined barImg'>storefront</div>
            <div className='BarText'>스토어</div>
          </Link>
        </div>
        <div className={`BarMenu ${location.pathname === '/communities' ? 'active' : ''}`}>
          <Link to='/communities'>
            <div className='material-symbols-outlined barImg'>forum</div>
            <div className='BarText'>커뮤니티</div>
          </Link>
        </div>
        <div className={`BarMenu ${location.pathname === '/mypage' ? 'active' : ''}`}>
          <Link to='/mypage'>
            <div className='material-symbols-outlined barImg'>person</div>
            <div className='BarText'>My</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BottomBar