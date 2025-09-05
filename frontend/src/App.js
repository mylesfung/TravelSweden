import React from "react";
import { Routes, Route } from "react-router";

import { Home } from './pages/Home';
import { Layout } from './Layout';
import { CreateAccount, SignIn } from './pages/UserLogin';
import { Reviews, NewReview } from './pages/Reviews';
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
                    <Route path="reviews" element={<Reviews />} />
                    <Route path="new-review" element={<NewReview />} />
                    <Route path="sign-in" element={<SignIn />} />
                    <Route path="create-account" element={<CreateAccount />} />
                    <Route path="maintenance" element={<Maintenance />} />
                </Route>
            </Route>  
        </Routes>
    )
}