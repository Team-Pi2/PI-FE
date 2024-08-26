import React from 'react';
import './FlowerCard.css';

const FlowerCard = () => {
    return (
        <div className="flower-card">
            <img src="" alt="꽃 이미지" className="flower-image" />
            <div className="flower">
                <div className="flower-title">튤립</div>
                <div className="flower-details">
                    <div>평균수명<span>내용</span></div>
                    <div>평균수명<span>내용</span></div>
                    <div>평균수명<span>내용</span></div>
                </div>

            </div>
        </div>
    );
};

export default FlowerCard;