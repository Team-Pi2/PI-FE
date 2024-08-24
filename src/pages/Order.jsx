import React from 'react'
import TopBar from '../components/TopBar'
import './Order.css'
import { Link } from 'react-router-dom'

const Order = () => {
  return (
    <div className='Order'>
        <TopBar />
        <div className='orderContainer'>
            <div className='qnaContainer'>
                <div className='orderQ'><div className='qBold'>언제</div> 꽃다발이 필요한가요?</div>
                <div className='orderA'>
                    <div className='orderMenuBtn'>졸업식</div>
                    <div className='orderMenuBtn'>생일</div>
                    <div className='orderMenuBtn'>기념일</div>
                    <div className='orderMenuBtn'>졸업식</div>
                    <div className='orderMenuBtn'>졸업식</div>
                    <div className='orderMenuBtn'>졸업식</div>
                    <div className='orderMenuBtn'>졸업식</div>
                    <div className='orderMenuBtn'>졸업식</div>
                </div>
            </div>
            <div className='qnaContainer'>
                <div className='orderQ'><div className='qBold'>누구</div>에게 줄 꽃다발인가요?</div>
                <div className='orderA'>
                    <div className='orderMenuBtn'>본인</div>
                    <div className='orderMenuBtn'>친구</div>
                    <div className='orderMenuBtn'>연인</div>
                    <div className='orderMenuBtn'>부모님</div>
                    <div className='orderMenuBtn'>자녀</div>
                    <div className='orderMenuBtn'>형제·자매</div>
                    <div className='orderMenuBtn'>졸업식</div>
                    <div className='orderMenuBtn'>졸업식</div>
                </div>
            </div>
            <div className='qnaContainer'>
                <div className='orderQ'>원하는 <div className='qBold'>색상</div>이 있나요?</div>
                <div className='orderA'>
                    <div className='orderMenuBtn'>빨간색</div>
                    <div className='orderMenuBtn'>주황색</div>
                    <div className='orderMenuBtn'>기념일</div>
                    <div className='orderMenuBtn'>졸업식</div>
                    <div className='orderMenuBtn'>졸업식</div>
                    <div className='orderMenuBtn'>졸업식</div>
                    <div className='orderMenuBtn'>졸업식</div>
                    <div className='orderMenuBtn'>졸업식</div>
                </div>
            </div>
            <div className='qnaContainer'>
                <div className='orderQ'>원하는 <div className='qBold'>꽃 종류</div>가 있나요?</div>
                <div className='orderA'>
                    <div className='orderMenuBtn'>장미</div>
                    <div className='orderMenuBtn'>해바라기</div>
                    <div className='orderMenuBtn'>튤립</div>
                    <div className='orderMenuBtn'>프리지아</div>
                    <div className='orderMenuBtn'>졸업식</div>
                    <div className='orderMenuBtn'>졸업식</div>
                    <div className='orderMenuBtn'>졸업식</div>
                    <div className='orderMenuBtn'>졸업식</div>
                </div>
            </div>
            <div className='qnaContainer'>
                <div className='orderQ'>원하는 <div className='qBold'>꽃말</div>이 있다면 적어주세요</div>
                <div>
                    <textarea className='textarea' />
                </div>
            </div>
            <div className='BtnOrder'><Link to='/standby'>꽃다발 제작하기</Link></div>
        </div>
    </div>
  )
}

export default Order