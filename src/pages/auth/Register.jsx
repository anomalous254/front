import React from 'react';
import './index.scss';
import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import bot from '../../assets/avatar/bot.png';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
    const loginData = await request.formData();
    const email = loginData.get('email');
    const username = loginData.get('username');
    const first_name = loginData.get('first_name');
    const last_name = loginData.get('last_name');
    const country = loginData.get('country');
    const password = loginData.get('password');
    const re_assword = loginData.get('re_password');
    const contact = loginData.get('phone');
    const credentials = {
        email,
        username,
        first_name,
        last_name,
        country,
        password,
        re_assword,
        contact,
    };
    const data = {
        username,
        first_name,
        last_name,
        contact,
        country,
        email,
        languages_scores: [
            { name: 'swahili', points: 0 },
            { name: 'igbo', points: 0 },
            { name: 'yoruba', points: 0 },
            { name: 'hausa', points: 0 },
        ],
        rank: '0',
        points: '0',
        image: 'https://img.freepik.com/premium-vector/african-american-black-young-man-rhombus-vest-round-avatar-face-icon-flat-style_768258-2936.jpg',
    };
    try {
        localStorage.setItem('userInfo', JSON.stringify(data));
        toast.success('Accout created successfuly!!', { theme: 'dark' });
        return redirect('/login');
    } catch (error) {
        const errormsg = error.response.data.detail;
        toast.error(errormsg, { theme: 'dark' });
        return null;
    }
};

export const RegisterPage = () => {
    const logingState = useNavigation();

    return (
        <div className="auth-container">
            <div className="login-container">
                <img src={bot} alt="image" />
                <div>
                    <div className="form-container">
                        <div>
                            <div className="login-header">
                                <h2 className="login-text">Register</h2>
                            </div>
                        </div>

                        <div>
                            <Form method="post" replace className="auth-form">
                                <input
                                    type="text"
                                    name="username"
                                    className="input"
                                    placeholder="Username"
                                    required
                                />
                                

                                <input
                                    type="email"
                                    name="email"
                                    className="input"
                                    placeholder="email"
                                    required
                                />
                                <input
                                    type="text"
                                    name="country"
                                    className="input"
                                    placeholder="country"
                                    required
                                />

                                <input
                                    type="password"
                                    name="password"
                                    className="input"
                                    placeholder="password"
                                    required
                                />

                                <input
                                    type="password"
                                    name="re_password"
                                    id="password"
                                    className="input"
                                    placeholder="confirm password"
                                    required
                                />
                                <input
                                    type="submit"
                                    value={
                                        logingState.state === 'idle'
                                            ? 'Sign up'
                                            : 'Creating account...'
                                    }
                                />
                            </Form>
                            <div className="login-redirects">
                                <p className="">
                                    dont have an account ???{' '}
                                    <span>
                                        <Link to="/login">Login</Link>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
