import React, { useEffect, useState } from 'react'
import './Complete.css'
import flower_mock1 from '../assets/flower_mock1.png'
import flower_mock2 from '../assets/flower_mock2.png'
import flower_mock3 from '../assets/flower_mock3.png'
import flower_mock4 from '../assets/flower_mock4.png'
import { useLocation, useNavigate } from 'react-router-dom'

const Complete = () => {

    const navigate = useNavigate()
    const location = useLocation()

    const flowerImages = [flower_mock1, flower_mock2, flower_mock3, flower_mock4]
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        if (location.state && location.state.randomIndex !== undefined) {
            setCurrentIndex(location.state.randomIndex)
        } else {
            const randomIndex = Math.floor(Math.random() * flowerImages.length)
            setCurrentIndex(randomIndex)
        }
    }, [location.state])



    const price = 50000

    const [isOpen, setIsOpen] = useState(false)
    const [isLike, setIsLike]= useState(false)

    const toggleDetail = () => {
        setIsOpen(!isOpen)
    }

    const toggleLike = () => {
        setIsLike(!isLike)
    }


    const handleNew = () => {
        const randomIndex = Math.floor(Math.random() * flowerImages.length)
        navigate('/standby')
    }
    

    const handleRequest = () => {
        navigate('/storelist')
        
    }


  return (
    <div className='Complete'>
        <div className='completeTitle'>꽃다발이 완성되었어요!</div>
        <div className='completePhoto'>
            <img src={flowerImages[currentIndex]} alt='꽃다발 완성본' className='completePhotoFlower' />
            <div
                className={`material-symbols-outlined photoFavIcon ${isLike ? 'like' : ''}`}
                onClick={toggleLike}
            >
                favorite
            </div>
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
            <div className='btnM new' onClick={handleNew}>새로 만들기</div>
            <div className='btnM request' onClick={handleRequest}>제작 요청하기</div>
        </div>
    </div>
  )
}

export default Complete