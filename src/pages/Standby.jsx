import React from 'react'
import TopBar from '../components/TopBar'
import './Standby.css'
import CardSwiper from '../components/CardSwiper'
import { Link } from 'react-router-dom'

const Standby = () => {
  return (
    <div className='Standby'>
        <TopBar />
        <div className='standbyContainer'>
            <div className='standbyText'>
                <div className='standbyTitle'>고객님만을 위한 맞춤형 꽃다발이 제작되는 중이에요!</div>
                <div className='standbyDescription'>잠시만 기다려주세요</div>
            </div>
            <div className='standbySub'>
                <div className='standbySubTitle'><Link to='/complete'>최근 판매된 꽃다발이에요</Link></div>
                <div className='standbySubContainer'>
                    <CardSwiper />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Standby