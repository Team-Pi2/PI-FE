// Plant.js
import React, { useState, useEffect } from 'react';
import Search from '../components/SearchBar';
import Loading from '../components/Loading';
import FlowerCard from '../components/Plant/FlowerCard';
import FilterButtons from '../components/FilterButtons';
import ChatCard from '../components/Community/ChatCard';
import DropdownToggle from '../components/Store/DropdownToggle';
import './Plant.css';

const Plant = () => {
    const [loading, setLoading] = useState(false); // 로딩 상태
    const [plants, setPlants] = useState([]); // 식물 정보
    const [searchKeyword, setSearchKeyword] = useState(""); // 검색 키워드

    const getPlantInfos = async (keyword = "") => {
        setLoading(true);
        try {
            let url = `http://192.168.35.104:8080/api/plant`;
            if (keyword) {
                url += `?name=${keyword}`;
            }
            const response = await fetch(url, { method: 'GET' });
            const json = await response.json();
            setPlants(json); // 상태 업데이트
        } catch (error) {
            console.error('Fetching plants failed:', error);
        } finally {
            setLoading(false); // 로딩 상태 해제
        }
    };

    useEffect(() => {
        getPlantInfos(searchKeyword); // 검색 키워드에 따라 식물 정보 가져오기
    }, [searchKeyword]);

    const handleSearch = (keyword) => {
        setSearchKeyword(keyword); // 검색 키워드 설정
    };

    return (
        <div className="Plant">
            {loading ? (
                <Loading />
            ) : (
                <Search onSearch={handleSearch} /> // Search 컴포넌트에 onSearch prop 전달
            )}

            {/* plants 데이터 사용 부분 */}
            {plants.data?.plantInfos?.length > 0 ? (
                <div className='plant-cards'>
                    {plants.data.plantInfos.map((item) => (
                        <ChatCard
                            key={item.id}
                            title={item.title}
                            age={item.age}
                            water={item.water}
                            env={item.env}
                        />
                    ))}
                </div>
            ) : (
                <div className="nonMessage">식물이 존재하지 않습니다.</div>
            )}
        </div>
    );
};

export default Plant;