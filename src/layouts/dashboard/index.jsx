import React from 'react';
import { Header, SideBar, Footer } from '../../components';
import { Outlet } from 'react-router-dom';
import './index.scss';
import { LoadingPage } from '../../components';

export const DashboardLayout = () => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(true);
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="layout">
            {loading ? (
                <LoadingPage />
            ) : (
                <>
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
                </>
            )}
        </div>
    );
};
