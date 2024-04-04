import React from 'react';
import './index.scss';
import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import bot from '../../assets/avatar/bot.png';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
    const loginData = await request.formData();
    const username = loginData.get('username');
    const password = loginData.get('password');
    const credentials = { username, password };
    const localStorageData = localStorage.getItem('userInfo');
    const userData = JSON.parse(localStorageData);
    try {
        if (userData.username === credentials.username) {
            toast.success('login successfuly!!', {
                theme: 'dark',
                autoClose: 3000,
            });
            return redirect('/dashboard');
        } else {
            toast.error('acccount not found !', {
                theme: 'dark',
                autoClose: 3000,
            });
            return redirect('/login');
        }
    } catch (error) {
        toast.error('acccount not found !', { theme: 'dark', autoClose: 3000 });
        return null;
    }
};

export const LoginPage = () => {
    const logingState = useNavigation();

    return (
        <div className="auth-container">
            <div className="login-container">
                <img src={bot} alt="image" />
                <div>
                    <div className="form-container">
                        <div>
                            <div className="login-header">
                                <h2 className="login-text">Login</h2>
                            </div>
                        </div>

                        <div>
                            <Form method="post" replace className="auth-form">
                                <input
                                    type="text"
                                    name="username"
                                    className="input"
                                    placeholder="username"
                                />

                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="input"
                                    placeholder="password"
                                />
                                <input
                                    type="submit"
                                    value={
                                        logingState.state === 'idle'
                                            ? 'Login'
                                            : 'Loging in...'
                                    }
                                />
                            </Form>
                            <div className="login-redirects">
                                <p className="">
                                    dont have an account ???{' '}
                                    <span>
                                        <Link to="/register">Sign Up</Link>
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
