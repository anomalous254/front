import React from 'react';
import './index.scss';
import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import bot from '../../assets/avatar/bot.png';
import { toast } from 'react-toastify';
import { ImSpinner3 } from 'react-icons/im';
import { loginUser } from '../../services/loginUser';

export const action = async ({ request }) => {
    const loginData = await request.formData();
    const email = loginData.get('email');
    const password = loginData.get('password');
    const credentials = { email, password };
    try {
        const reponse = await loginUser(credentials);
        toast.success('succesfully logged in!', {
            theme: 'dark',
            autoClose: 3000,
        });
        return redirect('/dashboard');
    } catch (error) {
        console.log(error);
        toast.error('acccount not found !', { theme: 'light', autoClose: 3000 });
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
                                    name="email"
                                    className="input"
                                    placeholder="email"
                                />

                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    className="input"
                                    placeholder="password"
                                />
                                <button className="submit__btn">
                                    {logingState.state === 'idle' ? (
                                        'Login'
                                    ) : (
                                        <ImSpinner3 className="spinner" />
                                    )}
                                </button>
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
