// Store.js
import { React, useState, useEffect } from 'react';
import Search from '../components/SearchBar';
import Loading from '../components/Loading';

import StoreCard from '../components/Store/StoreCard';
import FilterButtons from '../components/FilterButtons';
import DropdownToggle from '../components/Store/DropdownToggle';

import './Store.css'

const Store = () => {
    const [loading, setLoading] = useState(false); // 테스트 이후 true로 변경
    const [storeInfos, setStoreInfos] = useState([]); // 서버에서 가져온 스토어 정보
    const [selectedFilter, setSelectedFilter] = useState('씨앗'); // 기본 선택된 필터

    // // 데이터 가져오기 예시 (실제 URL로 대체 필요)
    // const getStoreInfos = async () => {
    //     setLoading(true);
    //     try {
    //         const response = await fetch(`url`, { method: 'GET' }); // 서버에서 데이터를 가져옴
    //         const json = await response.json(); // 응답을 JSON으로 변환
    //         setStoreInfos(json); // 상태를 업데이트
    //     } catch (error) {
    //         console.error('Fetching store information failed:', error); // 오류가 발생한 경우 콘솔에 오류 메시지 출력
    //     } finally {
    //         setLoading(false); // 로딩 상태를 false로 설정
    //     }
    // };

    // useEffect(() => {
    //     getStoreInfos(); // 컴포넌트가 마운트될 때 데이터 가져오기
    // }, []);

    // // 선택된 필터에 따라 스토어 정보를 필터링
    // const filteredStores = storeInfos.filter(store => store.category === selectedFilter);

    return (
        <div className="Store">
            {loading ?
                <Loading /> :
                <Search />}

            <FilterButtons
                className="filter-button"
                filters={["모종", "씨앗", "도구", "비료"]}
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
            />

            <div className='dropDown'>
                <DropdownToggle></DropdownToggle>
            </div>
            <div>
                <StoreCard></StoreCard>
                <StoreCard></StoreCard>
                <StoreCard></StoreCard>
                <StoreCard></StoreCard>
            </div>

            {/* {loading ? (
                <Loading />
            ) : filteredStores.length > 0 ? (
                <div className='store-cards'>
                    {filteredStores.map((item) => (
                        <StoreCard
                            key={item.id}
                            title={item.title}
                            price={item.price}
                            name={item.name}
                            script={item.script}
                        />
                    ))}
                </div>
            ) : (
                <div className="message">해당 카테고리의 스토어 정보가 없습니다.</div>
            )} */}
        </div>
    );
};

export default Store;