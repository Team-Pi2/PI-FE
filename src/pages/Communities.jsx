// App.js

import { React, useState, useEffect } from 'react';
import ChatSearchBar from '../components/Community/ChatSearchBar';
import './Communities.css'
import ChatCard from '../components/Community/ChatCard';
import Loading from '../components/Loading';

const Communities = () => {

    const [loading, setLoading] = useState(false); // 테스트 이후 true로 변경
    // const [chats, setChats] = useState([]);


    // const getChatInfos = async () => {
    //     setLoading(true);
    //     try {
    //         const response = await fetch(`url`, { method: 'GET' }); // 서버에서 데이터를 가져옴
    //         const json = await response.json(); // 응답을 JSON으로 변환
    //         setChats(json); // 상태를 업데이트
    //     } catch (error) {
    //         console.error('Fetching books failed:', error); // 오류가 발생한 경우 콘솔에 오류 메시지 출력
    //     } finally {
    //         setLoading(false); // 로딩 상태를 false로 설정
    //     }
    // };

    // useEffect(() => {
    //     getChatInfos()
    // });


    return (
        <div className="Communities">

            {loading ?
                <Loading /> :
                <ChatSearchBar />}
{/* 
            {loading ?
                <Loading /> :
                chatInfos.length > 0 ?
                    <>
                        <div className='chatCards'>
                            {ChatCard.data.chatInfos.map((item) => (<ChatCard
                                title={item.title}
                                tags={item.tags}
                                id = {item.id}
                                author
                            />
                            ))}
                        </div>
                    </>
                    :
                    <div className="message">채팅방이 존재하지 않습니다.</div>

            } */}

            <div className='chatCards'>
                <ChatCard></ChatCard>
                <ChatCard></ChatCard>
                <ChatCard></ChatCard>
                <ChatCard></ChatCard>
            </div>

        </div>
    );
};

export default Communities;