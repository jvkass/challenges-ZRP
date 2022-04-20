import React, { lazy, Suspense } from "react";
import { Routes, Route } from 'react-router-dom';

const Login = lazy(() => import("../pages/Login"));

const Home = lazy(() => import("../pages/Home"));

const Hero = lazy(() => import("../pages/Hero"));


export const Router: React.FC = () => {
    return (
        <Suspense fallback="Loading...">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/home" element={<Home />} />
                <Route path="/hero" element={<Hero />} />
            </Routes>
        </Suspense>
    );
};