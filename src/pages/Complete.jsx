import React, { useState } from 'react'
import './Complete.css'
import flower2 from '../assets/flower2.png'
import { useNavigate } from 'react-router-dom'

const Complete = () => {

    const navigate = useNavigate()

    const price = 50000

    const [isOpen, setIsOpen] = useState(false)

    const toggleDetail = () => {
        setIsOpen(!isOpen)
    }

    const handleNew = () => {
        navigate('/standby')
    }

    const handleRequest = () => {
        navigate('/communities/chatorder')
        // navigate('/communities/:id')
        
    }


  return (
    <div className='Complete'>
        <div className='completeTitle'>꽃다발이 완성되었어요!</div>
        <div className='completePhoto'>
            <img src={flower2} alt='꽃다발 완성본' className='completePhotoFlower' />
            <div className='material-symbols-outlined photoFavIcon'>favorite</div>
        </div>
        <div className='completePredictContainer'>
            <div className='completePriceTitle'>예상 가격</div>
            <div className='completePrice'>
                <div className='completePriceToggle' onClick={toggleDetail}>
                    <span className={`material-symbols-outlined priceIcon ${isOpen ? 'open' : ''}`}>play_arrow</span>
                    <div className='completePrice'>{price}원</div>
                </div>
                <div className={`completeSubPriceContainer ${isOpen ? 'open' : ''}`}>
                    <div className='completeSubPriceTitle'>현재 꽃 시세</div>
                    <div className='completeSubPriceBody'>튤립 5000원</div>
                    <div className='completeSubPriceBody'>장미 3000원</div>
                </div>
            </div>
        </div>
        
        <div className='completeBtnContainer'>
            <div className='btnM' onClick={handleNew}>새로 만들기</div>
            <div className='btnM' onClick={handleRequest}>제작 요청하기</div>
        </div>
    </div>
  )
}

export default Complete