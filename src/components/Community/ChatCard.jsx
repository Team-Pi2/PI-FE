
import React from 'react';
import './ChatCard.css';
import { useNavigate } from "react-router-dom";

// import chat1 from "../../assets/mock/chat1.png"
// import chat2 from "../../assets/mock/chat2.jpg"
// import chat3 from "../../assets/mock/chat3.jpg"
// import chat4 from "../../assets/mock/chat4.jpg"

const ChatCard = ({ title, member, tags, img, id }) => {

    console.log(title)
    const navigate = useNavigate();
    const onClick =()=> {
        navigate(`/communities/${id}`)
    }
    return (
        <div className="card">
            <div onClick={onClick} className="card-content">
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
            <img src={`/mock/chat${id}.jpg`} alt="플로리스트" className="card-image" />
        </div>
    );
};

export default ChatCard;