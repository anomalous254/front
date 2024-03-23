import React from 'react';
import './App.scss';
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import { DashboardLayout } from './layouts';
import { StartGame, Game, ReviewList } from './pages';
import { LoadingPage } from './components';

const routes = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<LoadingPage />}></Route>
            <Route path="dashboard" element={<DashboardLayout />}>
                <Route index element={<StartGame />} />
                <Route path="game" element={<Game />} />
                <Route path="reviews" element={<ReviewList />} />
                <Route path="*" element={<h3>Page Not Found</h3>} />
            </Route>
        </>
    )
);

function App() {
    return <RouterProvider router={routes} />;
}

export default App;
