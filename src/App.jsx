import React from 'react';
import './App.scss';
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import {
    DashboardLayout,
    WordsPageLayout,
    ProfileLayout,
    DashboardLoader,
} from './layouts';
import {
    StartGame,
    Game,
    ReviewList,
    PageNotFound,
    Leaderboard,
    Words,
    ProfileInfo,
    ProfileScores,
    LoginPage,
    RegisterPage,
} from './pages';
import { LoadingPage } from './components';

const routes = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<LoadingPage />} />
            <Route
                path="dashboard"
                element={<DashboardLayout />}
                loader={DashboardLoader}
            >
                <Route index element={<StartGame />} />
                <Route path="game" element={<Game />} />
                <Route path="reviews" element={<ReviewList />} />
                <Route path="profile" element={<ProfileLayout />}>
                    <Route index element={<ProfileInfo />} />
                    <Route path="scores" element={<ProfileScores />} />
                </Route>
                <Route path="words" element={<WordsPageLayout />}>
                    <Route index element={<Words />} />
                </Route>
                <Route path="leaderboard" element={<Leaderboard />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
        </>
    )
);

function App() {
    return <RouterProvider router={routes} />;
}

export default App;
