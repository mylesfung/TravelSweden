import React from "react";
import { Routes, Route } from "react-router";

import { Home } from './all-pages/Home';
import { Layout } from './Layout';
import { CreateAccount, SignIn, MyAccount } from './all-pages/UserLogin';
import { AllReviews, NewReview, MyReviews, EditReview } from './all-pages/UserReviews';
import { Lodging, Transit, Food } from "./all-pages/SidebarInfo";
import { Maintenance } from "./all-pages/Maintenance";

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="pages">
                    <Route path="lodging" element={<Lodging />} />
                    <Route path="transit" element={<Transit />} />
                    <Route path="food" element={<Food />} />
                    <Route path="reviews" element={<AllReviews />} />
                    <Route path="new-review" element={<NewReview />} />
                    <Route path="my-reviews" element={<MyReviews />} />
                    <Route path="edit-review" element={<EditReview />} />
                    <Route path="create-account" element={<CreateAccount />} />
                    <Route path="sign-in" element={<SignIn />} />
                    <Route path="my-account" element={<MyAccount />} />
                    <Route path="maintenance" element={<Maintenance />} />
                </Route>
            </Route>  
        </Routes>
    )
}