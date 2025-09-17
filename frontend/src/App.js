import React from "react";
import { Routes, Route } from "react-router";

import { Home } from './static/Home';
import { Layout } from './Layout';
import { Lodging, Transit, Cuisine, Nature, History, Design } from "./static/SidebarInfo";
import { Maintenance, AccountRequired } from "./static/StatusMessages";
import { AllReviews, NewReview, MyReviews, EditReview } from './service/Reviews';
import { CreateAccount, SignIn, MyAccount, EditAccount } from './service/Account';

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="static">
                    <Route path="lodging" element={<Lodging />} />
                    <Route path="transit" element={<Transit />} />
                    <Route path="cuisine" element={<Cuisine />} />
                    <Route path="nature" element={<Nature />} />
                    <Route path="history" element={<History />} />
                    <Route path="design" element={<Design />} />
                    <Route path="maintenance" element={<Maintenance />} />
                    <Route path="account-required" element={<AccountRequired />} />
                </Route>
                <Route path="service">
                    <Route path="reviews" element={<AllReviews />} />
                    <Route path="new-review" element={<NewReview />} />
                    <Route path="my-reviews" element={<MyReviews />} />
                    <Route path="edit-review/:review_id" element={<EditReview />} />
                    <Route path="create-account" element={<CreateAccount />} />
                    <Route path="sign-in" element={<SignIn />} />
                    <Route path="my-account" element={<MyAccount />} />
                    <Route path="edit-account" element={<EditAccount />} />
                </Route>
            </Route>  
        </Routes>
    )
}