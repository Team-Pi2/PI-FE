import React, { useState } from 'react';
import ChatBubble from '../components/Community/Chat/ChatBubble';
import { useNavigate } from "react-router-dom";
import flower2 from '../assets/flower2.png'

import './ChatOrder.css';

const ChatOrder = () => {

    const navigate = useNavigate();
    const [messages, setMessages] = useState([
        { text: '맞춤형 꽃다발을 제작 요청합니다. 예상가격은 50,000원입니다.', isUser: true, name: 'User', imageUrl: flower2 },
        { text: '언제까지 필요하신가요?', isUser: false, name: '' },
        { text: '금요일까지 배송될까요?', isUser: true, name: 'User' },
        { text: '넵 가능합니다!', isUser: false, name: '' },
        { text: '감사합니다!', isUser: true, name: 'User' },
        // { text: '좋은 아이디어네요', isUser: false, name: '현솔' },
        // { text: '다 하면 사진 보내주세요~', isUser: false, name: '지유' },
        // { text: '기대돼요!', isUser: false, name: '지유' },
        // { text: '감사해요! :)', isUser: true, name: 'User' },
    ]);

    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, { text: newMessage, isUser: true, name: 'User' }]);
            setNewMessage('');
        }
    };

    const handleBack = () => {
        navigate(`/communities`);
      };

    return (
        <div className="chat-screen">
            <div className="chat-header">
                <button className="back-button" onClick={handleBack}>←</button>
                전남 강진 화훼농가
                <button className="more-button">⋮</button>
            </div>
            <div className="chat-body">
                {messages.map((msg, index) => (
                    <ChatBubble key={index} message={msg.text} isUser={msg.isUser} name={msg.name} imageUrl={msg.imageUrl} />
                ))}
            </div>
            <div className="chat-input">
                <button className="photo-button">+</button>
                <input
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button className="chat-button" onClick={handleSendMessage}>전송</button>
            </div>
        </div>
    );
};

export default ChatOrder;