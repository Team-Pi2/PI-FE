// App.js
import { React, useState, useEffect } from 'react';
import StoreDetailCard from '../components/Store/StoreDetail/StoreDetailCard'
import './StoreDetail.css'
const StoreDetail = () => {

    return (
        <div className="store-detail">
            <StoreDetailCard></StoreDetailCard>
            <div className='store-detail-detail'>
                설명
            </div>
        </div>
    );
};

export default StoreDetail;