import React from "react";
import { Routes, Route } from "react-router";

import { Home } from './pages/Home';
import { Layout } from './Layout';
import { SignUp, SignIn } from './pages/Login';
import { Reviews, SubmitReview } from './pages/Reviews';
import { Lodging, Transit, Food } from "./pages/SidebarInfo";
import { Maintenance } from "./pages/Maintenance";

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="pages">
                    <Route path="lodging" element={<Lodging />} />
                    <Route path="transit" element={<Transit />} />
                    <Route path="food" element={<Food />} />
                    <Route path="Reviews" element={<Reviews />} />
                    <Route path="SubmitReview" element={<SubmitReview />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="maintenance" element={<Maintenance />} />
                </Route>
            </Route>  
        </Routes>
    )
}