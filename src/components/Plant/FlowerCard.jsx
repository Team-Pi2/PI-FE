import React from 'react';
import './FlowerCard.css';

const FlowerCard = ({id, title="1", age="1", water="1", env=""}) => {
    return (
        <div className="flower-card">
            <img src="" alt="꽃 이미지" className="flower-image" />
            <div className="flower">
                <div className="flower-title">{title}</div>
                <div className="flower-details">
                    <div>평균 수명<span>{age}</span></div>
                    <div>물주는 법<span>{water}</span></div>
                    <div>키우는 법<span>{env}</span></div>
                </div>

            </div>
        </div>
    );
};

export default FlowerCard;