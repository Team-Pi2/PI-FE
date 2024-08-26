// ChatBubble.js
import React from 'react';
import './ChatBubble.css';

const ChatBubble = ({ message, isUser, name }) => {
    return (
        <div className={`chat-bubble ${isUser ? 'user' : 'other'}`}>
            {!isUser && <div className="chat-name">{name}</div>}
            <div className="message">{message}</div>
        </div>
    );
};

export default ChatBubble;