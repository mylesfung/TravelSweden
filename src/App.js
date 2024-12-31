import React from "react";
import { Routes, Route } from "react-router";

import { Home } from './components/pages/Home';
import { Layout } from './components/Layout';
import { SignIn } from './components/pages/SignIn';
import { SignUp } from './components/pages/SignUp';
import { Reviews } from './components/pages/Reviews';
import { Lodging } from "./components/pages/static/Lodging";
import { Transit } from "./components/pages/static/Transit";
import { Food } from "./components/pages/static/Food";
import { NewReview } from "./components/pages/NewReview";

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="pages">
                    <Route path="static">
                        <Route path="lodging" element={<Lodging />} />
                        <Route path="transit" element={<Transit />} />
                        <Route path="food" element={<Food />} />
                    </Route>
                    <Route path="Reviews" element={<Reviews />} />
                    <Route path="NewReview" element={<NewReview />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                </Route>
                
            </Route>  
        </Routes>
    )
}