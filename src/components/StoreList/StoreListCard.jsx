
import React from 'react';
import './StoreListCard.css';
import { useNavigate } from "react-router-dom";

// import chat1 from "../../assets/mock/chat1.png"
// import chat2 from "../../assets/mock/chat2.jpg"
// import chat3 from "../../assets/mock/chat3.jpg"
// import chat4 from "../../assets/mock/chat4.jpg"

const StoreListCard = ({ name, number, address, id }) => {

    const navigate = useNavigate();
    const onClick =()=> {
        navigate(`/communities/chatorder`)
    }
    return (
        <div className="store-card">
            <div onClick={onClick} className="card-content">
                <div className="card-title">{name}</div>
                <div className="card-info">
                    <span className="card-text">{address}</span>
                </div>
                <div className="card-tags">
                    {number}
                </div>
            </div>
        </div>
    );
};

export default StoreListCard;