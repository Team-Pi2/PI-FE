
import React from 'react';
import './StoreDetailCard.css';

const StoreCard = () => {
    return (
        <div className="store-detail-card">
            <img src="" alt="판매이미지" className="store-detail-image" />
            <div className="store-detail-info">
                <div>
                    <div className="store-detail-title">판매상품 제목</div>
                    <div className='store-detail-name'>판매 상점 이름</div>
                </div>
                <div className='store-detail-price'>가격</div>
            </div>
        </div>
    );
};

export default StoreCard;