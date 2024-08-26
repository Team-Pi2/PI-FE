// StoreDetail.js
import { React } from 'react';
import { useNavigate } from 'react-router-dom';
import StoreDetailCard from '../components/Store/StoreDetail/StoreDetailCard';
import './StoreDetail.css';

const StoreDetail = () => {
    const navigate = useNavigate(); // useNavigate 훅 사용

    const handleBackClick = () => {
        navigate(-1); // 뒤로 가기 기능 구현
    };

    return (
        <div className="store-detail">
            <div className='infos'>
                <StoreDetailCard
                    title = "레드 로즈 부케"
                    name = "로즈팜"
                    price = "45000"
                ></StoreDetailCard>
                <div className='store-detail-detail'>
                    사랑을 전하는 레드 로즈 부케입니다.
                </div>
            </div>
        </div>
    );
};

export default StoreDetail;