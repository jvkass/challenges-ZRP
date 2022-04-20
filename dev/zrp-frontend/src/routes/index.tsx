import React, { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";

const Login = lazy(() => import("../pages/Login"));

export const Router: React.FC = () => {
    return (
        <Suspense fallback="Loading...">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Suspense>
    );
};