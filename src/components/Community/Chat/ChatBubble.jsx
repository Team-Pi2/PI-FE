// ChatBubble.js
import React from 'react';
import './ChatBubble.css';

const ChatBubble = ({ message, isUser, name, imageUrl }) => {
    return (
        <div className='chatContainer'>
            <div className={`chat-bubble ${isUser ? 'user' : 'other'}`}>
                {!isUser && <div className="chat-name">{name}</div>}
                <div className={`message-container ${imageUrl ? 'with-image' : ''} ${isUser ? 'user' : 'other'}`}>
                    {imageUrl && <img src={imageUrl} alt="icon" className="chat-bubble-image" />}
                    <div className="message">{message}</div>
                </div>
            </div>
        </div>
        
    );
};

export default ChatBubble;
