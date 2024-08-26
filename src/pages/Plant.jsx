// Plant.js
import React, { useState, useEffect } from 'react';
import Search from '../components/SearchBar';
import Loading from '../components/Loading';
import FlowerCard from '../components/Plant/FlowerCard';
import FilterButtons from '../components/FilterButtons';
import DropdownToggle from '../components/Store/DropdownToggle';
import './Plant.css';

const Plant = () => {
    const [loading, setLoading] = useState(false); // 로딩 상태
    const [plants, setPlants] = useState({}); // 식물 정보
    const [searchKeyword, setSearchKeyword] = useState(""); // 검색 키워드

    const getPlantInfos = async (keyword = "") => {
        setLoading(true);
        try {
            let url = `http://192.168.35.104:8080/api/plants?keyword=`;
            if (keyword) {
                url += keyword;
            }
            const response = await fetch(url, { method: 'GET' });
            const json = await response.json();
            setPlants(json); // 상태 업데이트
        } catch (error) {
            console.error('Fetching plants failed:', error);
        } finally {
            setLoading(false); // 로딩 상태 해제
            // console.log(plants)
        }
    };

    useEffect(() => {
        getPlantInfos(searchKeyword); // 검색 키워드에 따라 식물 정보 가져오기
    }, [searchKeyword]);

    const handleSearch = (keyword) => {
        setSearchKeyword(keyword); // 검색 키워드 설정
    };
    console.log(plants)
    // console.log(plants.data.plantInfos)

    return (
        <div className="Plant">
            {loading ? (
                <Loading />
            ) : (
                <Search onSearch={handleSearch} />
            )}

            {loading ? (
                <Loading />
            ) : plants.data?.plantInfos?.length > 0 ? (
                <div className='plant-cards'>
                    {plants.data.plantInfos.map((item) => (
                        <FlowerCard
                            key={item.id}
                            title={item.name}
                            age={item.age}
                            water={item.water}

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