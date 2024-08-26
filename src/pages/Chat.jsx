import React, { useState } from 'react';
import ChatBubble from '../components/Community/Chat/ChatBubble';
import './Chat.css';

const Chat = () => {
    const [messages, setMessages] = useState([
        { text: '꽃꽂이를 하고 싶은데 무슨 꽃으로 할까요?', isUser: true, name: 'User' },
        { text: '저는 국화를 좋아해요!', isUser: false, name: '지유' },
        { text: '장미 추천합니다!', isUser: false, name: '현솔' },
        { text: '옥잠화는 어때요?', isUser: false, name: '종민' },
        { text: '다 조합해서 해볼게요!', isUser: true, name: 'User' },
        { text: '좋은 아이디어네요', isUser: false, name: '현솔' },
        { text: '다 하면 사진 보내주세요~', isUser: false, name: '지유' },
        { text: '기대돼요!', isUser: false, name: '지유' },
        { text: '감사해요! :)', isUser: true, name: 'User' },
    ]);

    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() !== '') {
            setMessages([...messages, { text: newMessage, isUser: true, name: 'User' }]);
            setNewMessage('');
        }
    };

    return (
        <div className="chat-screen">
            <div className="chat-header">
                <button className="back-button">←</button>
                플로리스트가 될래요
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