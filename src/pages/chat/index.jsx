import React from 'react';
import './index.scss';
import { Form, useLocation, useNavigate } from 'react-router-dom';
import botimg from '../../assets/avatar/bot.png';

export const Game = () => {
    /*   const navigate = useNavigate(); */
    const data = useLocation() || null;
    /*  if (data.state === null) {
        console.log('hello');
        return navigate('/', { replace: true });
    } */
    console.log('helllo', data.state);
    const { icon, language } = data?.state || '';

    return (
        <Form method="post" className="form">
            <div className="chat">
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

                <div className='msg'>
                    <p>hello</p>
                </div>
            </div>

            <div className="answer">
                <input type="text" placeholder="Type answer" />
                <button>Send</button>
            </div>
        </Form>
    );
};
