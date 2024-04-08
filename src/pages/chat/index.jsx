import React from 'react';
import './index.scss';
import { Form, useLocation } from 'react-router-dom';
import botimg from '../../assets/avatar/bot.png';

const botData = [
    {
        bot: 'hello there ?',
    },
];

export const Game = () => {
    const [messages, setMessages] = React.useState(botData);
    const [inputValue, setInputValue] = React.useState('');
    const chatHistoryRef = React.useRef(null);
    const data = useLocation() || null;
    const { icon, language } = data?.state || '';

    const sendMessage = () => {
        if (inputValue.trim() !== '') {
            setMessages([
                ...messages,
                { user: inputValue, bot: 'This is a simulated bot reply.' },
            ]);
            setInputValue('');
        }
    };

    // Function to scroll chat window to the bottom
    const scrollToBottom = () => {
        chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    };

    // Scroll to bottom whenever messages change
    React.useEffect(() => {
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
                        i'm here to help you learn a language quickly and
                        effectively. Lets play the <span>{language}</span> game
                        :-)
                    </p>
                </div>

                <div className="chat-box">
                    <div className="sender">
                        {messages.map((message, index) => (
                            <div className="msg-container">
                                {message.user ? (
                                    <div className="msg user">
                                        <div key={index} className="message">
                                            <picture> {message.user}</picture>
                                        </div>
                                        <img src={icon} alt="avatar" />
                                    </div>
                                ) : null}

                                {message.bot ? (
                                    <div className="msg bot">
                                        <img src={botimg} alt="bot" />
                                        <div key={index} className="message">
                                            <p>{message.bot}</p>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="answer">
                <input
                    type="text"
                    placeholder="Type answer"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
};
