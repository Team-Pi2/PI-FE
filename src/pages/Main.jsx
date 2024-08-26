import React from 'react'
import BottomBar from '../components/BottomBar'
import './Main.css'
import TopBar from '../components/TopBar'
import { useNavigate } from 'react-router-dom'

const Main = () => {

  const navigate = useNavigate()

  const handleOrder = () =>  {
    navigate('/order')
  }

  return (
    <div className='Main'>
      <div className='mainContainer'>
        <div className='mainText'>
          <div className='mainTitle'>맞춤형 꽃다발 서비스</div>
          <div className='mainDescription'>원하는 꽃, 색상, 금액대의 꽃다발을 AI가 제작해드려요!</div>
        </div>
        <div className='mainBtnOrder' onClick={handleOrder}>주문하기</div>
      </div>
    </div>
  )
}

export default Main