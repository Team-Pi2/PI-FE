import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import flower1 from '../assets/flower1.png'
import flower2 from '../assets/flower2.png'
import './CardSwiper.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const CardSwiper = () => {

    const [cardList, setCardList] = useState([])

    useEffect(() => {
        const mockData = [
            {id: 1, imageUrl: flower1}, 
            {id: 2, imageUrl: flower2}, 
            {id: 3, imageUrl: flower1}, 
            {id: 4, imageUrl: flower2}, 
            {id: 5, imageUrl: flower2}, 
        ]
        setCardList(mockData)
    }, [])

  return (
    <Swiper
        direction={'horizontal'}
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
        }}
        slidesOffsetBefore={0} // 슬라이드 왼쪽 오프셋 조정
        slidesOffsetAfter={0} // 슬라이드 오른쪽 오프셋 조정
        className='cardSwiper'
    >
        {/* <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
        <SwiperSlide>5</SwiperSlide> */}
        {cardList.map((item, index) => (
            <SwiperSlide key={index}>
                <div className='flowerCard'>
                    <img src={item.imageUrl} alt={`Flower ${item.id}`} className='floweImg' />
                    <div className='material-symbols-outlined cardIcon'>favorite</div>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default CardSwiper