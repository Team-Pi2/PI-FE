import React, { useState, useEffect } from 'react';
import './StoreList.css';
import StoreListCard from '../components/StoreList/StoreListCard';

const StoreList = () => {
    return (
        <div className="StoreList">
            <div className='Message'>농가를 선택해주세요.</div>
            <StoreListCard name="우산동 화훼단지" address="광주 광산구 상무대로 419번길 140" number="062-945-6565" />
            <StoreListCard name="가나식물원" address="광주 광산구 상무대로 419번길 190" number="062-943-0736" />
            <StoreListCard name="광주원예농협화훼공판장" address="광주 서구 매월1로 7" number="062-123-4567" />
            <StoreListCard name="꽃양꽃색" address="충남 당진시 우강면 더풍골길 96-14" number="0507-1395-0808" />
        </div>
    );
};

export default StoreList;