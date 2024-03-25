import React from 'react';
import './App.scss';
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import { DashboardLayout, WordsPageLayout } from './layouts';
import {
    StartGame,
    Game,
    ReviewList,
    PageNotFound,
    Leaderboard,
    Words,
} from './pages';
import { LoadingPage } from './components';

const routes = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<LoadingPage />} />
            <Route path="dashboard" element={<DashboardLayout />}>
                <Route index element={<StartGame />} />
                <Route path="game" element={<Game />} />
                <Route path="reviews" element={<ReviewList />} />
                <Route path="words" element={<WordsPageLayout />}>
                    <Route index element={<Words />} />
                </Route>
                <Route path="leaderboard" element={<Leaderboard />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </>
    )
);

function App() {
    return <RouterProvider router={routes} />;
}

export default App;
