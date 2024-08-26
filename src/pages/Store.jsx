// Store.js
import { React, useState, useEffect } from 'react';
import Search from '../components/SearchBar';
import Loading from '../components/Loading';
import StoreCard from '../components/Store/StoreCard';
import FilterButtons from '../components/FilterButtons';
import DropdownToggle from '../components/Store/DropdownToggle';
import './Store.css';

const Store = () => {
    const [loading, setLoading] = useState(false); // 테스트 이후 true로 변경
    const [storeInfos, setStoreInfos] = useState([]); // 서버에서 가져온 스토어 정보
    const [selectedFilter, setSelectedFilter] = useState('꽃다발'); // 기본 선택된 필터
    // console.log(selectedFilter)
    // 데이터 가져오기 예시 (실제 URL로 대체 필요)
    const getStoreInfos = async () => {
        setLoading(true);
        try {
            const encodedFilter = encodeURIComponent(selectedFilter);
            console.log(selectedFilter, encodedFilter)
            const response = await fetch(`http://192.168.35.104:8080/api/orders?category=${selectedFilter}`, { method: 'GET' });
            const json = await response.json(); // 응답을 JSON으로 변환
            setStoreInfos(json); // 상태를 업데이트
        } catch (error) {
            console.error('Fetching store information failed:', error); // 오류가 발생한 경우 콘솔에 오류 메시지 출력
        } finally {
            setLoading(false); // 로딩 상태를 false로 설정
        }
    };

    useEffect(() => {
        getStoreInfos(); // selectedFilter가 변경될 때마다 데이터 가져오기
    }, [selectedFilter]); // selectedFilter를 의존성 배열에 추가

    return (
        <div className="Store">
            {loading ? <Loading /> : <Search />}

            <FilterButtons
                className="filter-button"
                filters={["꽃다발" ,"꽃바구니" , "화분"]}
                selectedFilter={selectedFilter}
                setSelectedFilter={setSelectedFilter}
            />

            <div className='dropDown'>
                <DropdownToggle />
            </div>

            {loading ? (
                <Loading />
            ) : storeInfos.data?.storeInfos?.length > 0 ? (
                <div className='store-cards'>
                    {storeInfos.data.storeInfos.map((item) => (
                        <StoreCard
                            key={item.id} // 각 StoreCard에 고유한 key를 추가
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            name={item.name}
                            script={item.script}
                        />
                    ))}
                </div>
            ) : (
                <div className="nonMessage">해당 카테고리의 스토어 정보가 없습니다.</div>
            )}
        </div>
    );
};

export default Store;