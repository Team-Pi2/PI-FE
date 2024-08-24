import React from 'react'
import BottomBar from '../components/BottomBar'
import './Main.css'
import TopBar from '../components/TopBar'
// import bgimg from '../assets/flower.png'

const Main = () => {
  return (
    <div className='Main'>
      <TopBar />
      <div className='mainContainer'>
        <div className='mainText'>
          <div className='mainTitle'>맞춤형 꽃다발 서비스</div>
          <div className='mainDescription'>원하는 꽃, 색상, 금액대의 꽃다발을 AI가 제작해드려요!</div>
        </div>
        <div className='mainBtnOrder'>주문하기</div>
      </div>
      <BottomBar />
      {/* <img src={bgimg} alt='베경 이미지' /> */}
    </div>
  )
}

export default Main