import React from "react";
import { Routes, Route } from "react-router";

import { Home } from './components/Home';
import { Layout } from './Layout';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Reviews } from './pages/Reviews';
import { Lodging } from "./pages/Lodging";
import { Transit } from "./pages/Transit";
import { Food } from "./pages/Food";
import { NewReview } from "./pages/NewReview";

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
                    <Route path="NewReview" element={<NewReview />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                </Route>
            </Route>  
        </Routes>
    )
}