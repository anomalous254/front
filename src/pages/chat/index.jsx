import React, { useState, useEffect, useRef } from 'react';
import './index.scss';
import { useLocation } from 'react-router-dom';
import botimg from '../../assets/avatar/bot.png';
import { chat } from '../../services/bot';
import ReactMarkdown from 'react-markdown';

export const Game = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [typing, setTyping] = useState(false);
    const chatHistoryRef = useRef(null);
    const data = useLocation() || null;
    const { icon, language } = data?.state || '';

    const sendMessage = async () => {
        if (inputValue.trim() !== '') {
            // Add user message to the chat
            setMessages((prevMessages) => [
                ...prevMessages,
                { role: 'user', content: inputValue },
            ]);
            setInputValue('');
            setTyping(true);

            try {
                const botReply = await chat(inputValue, messages);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { role: 'system', content: botReply.content },
                ]);
            } catch (error) {
                console.error('Error getting bot response:', error);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { bot: 'Error getting response from bot.' },
                ]);
            } finally {
                setTyping(false);
            }
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    };

    // Function to scroll chat window to the bottom
    const scrollToBottom = () => {
        if (chatHistoryRef.current) {
            chatHistoryRef.current.scrollTop =
                chatHistoryRef.current.scrollHeight;
        }
    };

    // Scroll to bottom whenever messages change
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className="form">
            <div className="chat" ref={chatHistoryRef}>
                <div className="greeting">
                    <img src={botimg} alt="bot" />
                    <p>
                        <span>
                            Welcome to Lulu!, I'm your language learning
                            assistant
                        </span>
                        <br />
                        I'm here to help you learn a language quickly and
                        effectively. Let's play the <span>{language}</span> game
                        :-)
                    </p>
                </div>

                <div className="chat-box">
                    <div className="sender">
                        {messages.map((message, index) => (
                            <div key={index} className="msg-container">
                                {message.role === 'user' && (
                                    <div className="msg user">
                                        <div className="message">
                                            <picture>{message.content}</picture>
                                        </div>
                                        <img src={icon} alt="avatar" />
                                    </div>
                                )}

                                {message.role === 'system' && (
                                    <div className="msg bot">
                                        <img src={botimg} alt="bot" />
                                        <div className="message">
                                            <ReactMarkdown>
                                                {message.content}
                                            </ReactMarkdown>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                        {typing && (
                            <div className="msg bot">
                                <img src={botimg} alt="bot" />
                                <div className="message">
                                    <p>typing...</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="answer">
                <input
                    type="text"
                    placeholder="Type answer"
                    value={inputValue}
                    onKeyPress={handleKeyPress}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};
