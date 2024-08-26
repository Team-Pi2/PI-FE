import React, { useState } from 'react';
import ChatBubble from '../components/Community/Chat/ChatBubble';
import { useNavigate } from "react-router-dom";

import './Chat.css';

const Chat = () => {

    const navigate = useNavigate();
    const [messages, setMessages] = useState([
        { text: '오늘 장미 축제 가려고요!', isUser: true, name: 'User' },
        { text: '부러워요 ㅠㅠ 저희 지역은 그런 게 없어서', isUser: false, name: '지유' },
        { text: '저도 가고 싶네요', isUser: false, name: '현솔' },
        { text: '저는 축제 기간 전에만 가려고요 ㅎㅎ', isUser: false, name: '종민' },
        { text: 'ㅎㅎ 후기 남기겠습니다!', isUser: true, name: 'User' },
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
                장미 사랑방
                <button className="more-button">⋮</button>
            </div>
            <div className="chat-body">
                {messages.map((msg, index) => (
                    <ChatBubble key={index} message={msg.text} isUser={msg.isUser} name={msg.name} />
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

export default Chat;