import React from 'react'
import './Complete.css'

const Complete = () => {

    const price = 50000
  return (
    <div className='Complete'>
        <div className='completeTitle'>꽃다발이 완성되었어요!</div>
        <div className='completePhoto'>
            <img src='' alt='꽃다발 완성본' />
            <div className='material-symbols-outlined photoFavIcon'>favorite</div>
        </div>
        <div className='completePriceTitle'>예상 가격</div>
        <div className='completePriceContainer'>
            <span className='material-symbols-outlined priceIcon'>play_arrow</span>
            <div className='completePrice'>{price}원</div>
            <div className='completeSubPrice'>현재 꽃 시세</div>
            <div className='completeSubPrice'>튤립 5000원</div>
            <div className='completeSubPrice'>장미 3000원</div>
        </div>
        <div className='completeBtnContainer'>
            <div className='btnM'>새로 만들기</div>
            <div className='btnM'>제작 요청하기</div>
        </div>
    </div>
  )
}

export default Complete