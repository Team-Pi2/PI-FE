// Communities.js
import React, { useState, useEffect } from 'react';
import './StoreList.css';
import StoreListCard from '../components/StoreList/StoreListCard';

const StoreList = () => {
    return (
        <div className="StoreList">
            <div className='Message'>농가를 선택해주세요.</div>
            <StoreListCard name="이름" address="주소" number="010-1234-1234" />
            <StoreListCard name="이름" address="주소" number="010-1234-1234" />
            <StoreListCard name="이름" address="주소" number="010-1234-1234" />
            <StoreListCard name="이름" address="주소" number="010-1234-1234" />

        </div>
    );
};

export default StoreList;