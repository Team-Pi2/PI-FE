import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import flower1 from '../assets/flower1.png'
import flower2 from '../assets/flower2.png'
import './CardSwiper.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';


const CardSwiper = () => {

    const [cardList, setCardList] = useState([])

    useEffect(() => {
        const mockData = [
            {id: 1, imageUrl: flower1, isLike: false}, 
            {id: 2, imageUrl: flower2, isLike: false}, 
            {id: 3, imageUrl: flower1, isLike: false}, 
            {id: 4, imageUrl: flower2, isLike: false}, 
            {id: 5, imageUrl: flower2, isLike: false}, 
        ]
        setCardList(mockData)
    }, [])

    const likeToggle = (id) => {
        setCardList(prevList => 
            prevList.map(item =>
                item.id === id ? {...item, isLike: !item.isLike} : item
            )
        )
    }

  return (
    <Swiper
        direction={'horizontal'}
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
        }}
        slidesOffsetBefore={0} // 슬라이드 왼쪽 오프셋 조정
        slidesOffsetAfter={0} // 슬라이드 오른쪽 오프셋 조정
        modules={[Autoplay]}
        className='cardSwiper'
    >
        {cardList.map((item, index) => (
            <SwiperSlide key={index}>
                <div className='flowerCard'>
                    <img src={item.imageUrl} alt={`Flower ${item.id}`} className='floweImg' />
                    <div
                        className={`material-symbols-outlined cardIcon ${item.isLike ? 'like' : ''}`}
                        onClick={() => likeToggle(item.id)}
                    >
                        favorite
                    </div>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default CardSwiper