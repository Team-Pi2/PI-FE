// Communities.js
import React, { useState, useEffect } from 'react';
import ChatSearchBar from '../components/Community/ChatSearchBar';
import './Communities.css';
import ChatCard from '../components/Community/ChatCard';
import Loading from '../components/Loading';

const Communities = () => {
    const [loading, setLoading] = useState(false); // 로딩 상태
    const [chatInfos, setChats] = useState([]); // 채팅방 정보
    const [searchKeyword, setSearchKeyword] = useState(""); // 검색 키워드

    const getChatInfos = async (keyword = "") => {
        setLoading(true);
        try {
            let url = `http://192.168.35.104:8080/api/chats?keyword=`;
            if (keyword) {
                url += `${keyword}`;
            }
            else {
                url += "all";
            }
            console.log(url);

            const response = await fetch(url, { method: 'GET' });
            const json = await response.json();
            setChats(json.data.chatInfos); // 상태 업데이트
        } catch (error) {
            console.error('Fetching chat information failed:', error);
        } finally {
            setLoading(false); // 로딩 상태 해제
        }
    };

    useEffect(() => {
        getChatInfos(searchKeyword); // 검색 키워드에 따라 채팅방 정보 가져오기
    }, [searchKeyword]);

    const handleSearch = (keyword) => {
        setSearchKeyword(keyword); // 검색 키워드 설정
    };

    return (
        <div className="Communities">
            {loading ? <Loading /> : <ChatSearchBar onSearch={handleSearch} />}

            {loading ? (
                <Loading />
            ) : chatInfos.length > 0 ? (
                <div className='chatCards'>
                    {chatInfos.map((item) => (
                        <ChatCard
                            key={item.id}
                            member = {item.member}
                            title={item.title}
                            tags={item.tags}
                            id={item.id}
                        />
                    ))}
                </div>
            ) : (
                <div className="nonMessage">채팅방이 존재하지 않습니다.</div>
            )}
        </div>
    );
};

export default Communities;