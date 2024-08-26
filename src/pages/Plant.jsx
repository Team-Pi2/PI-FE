// App.js
import { React, useState, useEffect } from 'react';
import Search from '../components/SearchBar';
import Loading from '../components/Loading';

import FlowerCard from '../components/Plant/FlowerCard';
import StoreCard from '../components/Store/StoreCard';
import FilterButtons from '../components/FilterButtons';
import ChatCard from '../components/Community/ChatCard';
import DropdownToggle from '../components/Store/DropdownToggle';

import './Plant.css'

const Plant = () => {

    const [loading, setLoading] = useState(false); // 테스트 이후 true로 변경

    // const [plants, setPlants] = useState([]);


    // const getPlantInfos = async () => {
    //     setLoading(true);
    //     try {
    //         const response = await fetch(`url`, { method: 'GET' }); // 서버에서 데이터를 가져옴
    //         const json = await response.json(); // 응답을 JSON으로 변환
    //         setPlants(json); // 상태를 업데이트
    //     } catch (error) {
    //         console.error('Fetching books failed:', error); // 오류가 발생한 경우 콘솔에 오류 메시지 출력
    //     } finally {
    //         setLoading(false); // 로딩 상태를 false로 설정
    //     }
    // };

    // useEffect(() => {
    //     getPlantInfos()
    // });

    return (
        <div className="Plant">
            {loading ?
                <Loading /> :
                <Search />}

            <FilterButtons className="filter-button" filters={["꽃", "나무", "화분", "모종"]}></FilterButtons>
            <div className='dropDown'>
                <DropdownToggle ></DropdownToggle>
            </div>


            {/*  수정해야합니당
            {loading ?
                <Loading /> :
                chatInfos.length > 0 ?
                    <>
                        <div className='plant-cards'>
                            {ChatCard.data.chatInfos.map((item) => (<ChatCard
                                title={item.title}
                                tags={item.tags}
                                author
                            />
                            ))}
                        </div>
                    </>
                    :
                    <div className="message">채팅방이 존재하지 않습니다.</div>

            } */}

            <div className='plant-cards'>
                <FlowerCard></FlowerCard>
                <FlowerCard></FlowerCard>
                <FlowerCard></FlowerCard>
                <FlowerCard></FlowerCard>
            </div>
        </div>
    );
};

export default Plant;