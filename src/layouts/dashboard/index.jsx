import React from 'react';
import { Header, SideBar, Footer } from '../../components';
import { Outlet, redirect } from 'react-router-dom';
import './index.scss';
import { isAuthenticated } from '../../utils';

export const loader = async () => {
    const loggedIn = await isAuthenticated();
    if (!loggedIn) {
        return redirect('/login');
    }
    return null
};

export const DashboardLayout = () => {
    return (
        <div className="layout">
            <Header />
            <div className="outlet">
                <div className="side-nav">
                    <SideBar />
                </div>
                <div className="outlet-container">
                    <Outlet />
                </div>
                <div className="footer">
                    <Footer />
                </div>
            </div>
        </div>
    );
};
