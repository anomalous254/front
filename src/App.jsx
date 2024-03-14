import React from 'react';
import './App.scss';
import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import Home from './pages/Home';

const routes = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Home />} />)
);

function App() {
    return <RouterProvider router={routes} />;
}

export default App