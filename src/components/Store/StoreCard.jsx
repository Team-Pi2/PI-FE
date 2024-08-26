import React from 'react';
import './StoreCard.css';
import { useNavigate } from "react-router-dom";

const StoreCard = ({title="title", name="name", price="7000", script="info", id=1}) => {
    const navigate = useNavigate();
    const onClick  = () => {
        navigate(`/store/${id}`)
    }
    return (
        <div className="store-card" onClick={onClick}>
            <img src={`/mock/seed${id}.jpg`} alt="판매이미지" className="store-image" />
            <div className="store">
                <div className="store-title">{title}</div>
                <div className='store-name'>{name}</div>
                <div className='store-price'>{price}원</div>
                <div className="store-details">
                    {script}
                </div>

            </div>
        </div>
    );
};

export default StoreCard;