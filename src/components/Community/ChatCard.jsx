
import React from 'react';
import './ChatCard.css';

const ChatCard = ({ title='플로리스트가 될래요', member='150', tags=['꽃', '플로리스트'], img }) => {
    return (
        <div className="card">
            <div className="card-content">
                <div className="card-title">{title}</div>
                <div className="card-info">
                    <span className="card-icon">👤</span>
                    <span className="card-text">{member}명</span>
                </div>
                <div className="card-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag">#{tag}</span>
                    ))}
                </div>
            </div>
            <img src="" alt="플로리스트" className="card-image" />
        </div>
    );
};

export default ChatCard;