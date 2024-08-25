import React from 'react'
import TopBar from '../components/TopBar'
import './Standby.css'

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
                <div className='standbySubTitle'>최근 판매된 꽃다발이에요</div>
                <div className='standbySubContainer'></div>
            </div>
        </div>
    </div>
  )
}

export default Standby