import React from "react";
import { Routes, Route } from "react-router";

import { Home } from './pages/Home';
import { Layout } from './Layout';
import { Lodging, Transit, Food, Nature, History, Design } from "./pages/SidebarInfo";
import { Maintenance, AccountRequired } from "./pages/StatusMessages";
import { AllReviews, NewReview, MyReviews, EditReview } from './services/UserReviews';
import { CreateAccount, SignIn, MyAccount } from './services/UserLogin';

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="pages">
                    <Route path="lodging" element={<Lodging />} />
                    <Route path="transit" element={<Transit />} />
                    <Route path="food" element={<Food />} />
                    <Route path="nature" element={<Nature />} />
                    <Route path="history" element={<History />} />
                    <Route path="design" element={<Design />} />
                    <Route path="maintenance" element={<Maintenance />} />
                    <Route path="account-required" element={<AccountRequired />} />
                </Route>
                <Route path="services">
                    <Route path="reviews" element={<AllReviews />} />
                    <Route path="new-review" element={<NewReview />} />
                    <Route path="my-reviews" element={<MyReviews />} />
                    <Route path="edit-review" element={<EditReview />} />
                    <Route path="create-account" element={<CreateAccount />} />
                    <Route path="sign-in" element={<SignIn />} />
                    <Route path="my-account" element={<MyAccount />} />
                </Route>
            </Route>  
        </Routes>
    )
}