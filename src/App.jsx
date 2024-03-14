import React from 'react';
import './App.scss';
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import { DashboardLayout } from './layouts';

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<DashboardLayout />}></Route>
    )
);

function App() {
    return <RouterProvider router={routes} />;
}

export default App;
