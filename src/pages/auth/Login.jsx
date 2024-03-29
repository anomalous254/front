import React from 'react';
import './index.scss';
import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import { RiMenu2Line } from 'react-icons/ri';
import bot from '../../assets/avatar/bot.png';
/* import { toast } from "react-toastify"; */

/* export const action = async ({ request }) => {
  const loginData = await request.formData();
  const email = loginData.get("email");
  const password = loginData.get("password");
  const credentials = { email, password };
  try {
    const resp = await loginUser(credentials);
    toast.success("login successfuly!!", { theme: "dark" });
    return redirect("/write");
  } catch (error) {
    const errormsg = error.response.data.detail;
    toast.error(errormsg, { theme: "dark" });
    return null;
  }
}; */

export const LoginPage = () => {
    const logingState = useNavigation();

    return (
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
                        <Form
                            method="post"
                            replace
                            className="login-form-inputs"
                        >
                            <label id="email">Username</label>
                            <input
                                type="text"
                                name="username"
                                className="input"
                            />

                            <label id="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                className="input"
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
    );
};
