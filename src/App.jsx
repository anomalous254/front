import React from 'react';
import './App.scss';
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import { DashboardLayout } from './layouts';
import { StartGame } from './pages';

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<DashboardLayout />}>
            <Route index element={<StartGame />} />
            <Route path='*' element={<h3>Page Not Found</h3>} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={routes} />;
}

export default App;
