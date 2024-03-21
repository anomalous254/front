import React from 'react';
import { Header, SideBar, Footer } from '../../components';
import { Outlet } from 'react-router-dom';
import './index.scss';

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
