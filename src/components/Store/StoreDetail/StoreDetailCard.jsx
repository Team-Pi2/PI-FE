
import React from 'react';
import './StoreDetailCard.css';

const StoreCard = ({title, id, name, price}) => {
    return (
        <div className="store-detail-card">
            <img src={`/mock/레드 로즈 부케.jpeg`} alt="판매이미지" className="store-detail-image" />
            <div className="store-detail-info">
                <div>
                    <div className="store-detail-title">{title}</div>
                    <div className='store-detail-name'>{name}</div>
                </div>
                <div className='store-detail-price'>{price}원</div>
            </div>
        </div>
    );
};

export default StoreCard;

