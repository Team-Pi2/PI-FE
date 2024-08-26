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
                <StoreDetailCard></StoreDetailCard>
                <div className='store-detail-detail'>
                    설명
                </div>
            </div>
        </div>
    );
};

export default StoreDetail;