import React from "react";
import { Routes, Route } from "react-router";
import './App.css';

import { Home } from './components/Home';
import { Layout } from './components/Layout';
import { SignIn } from './components/pages/SignIn';
import { SignUp } from './components/pages/SignUp';
import { SearchResults } from './components/pages/SearchResults';
import { Reviews } from './components/pages/Reviews';
import { ReviewsWidget } from "./components/widgets/ReviewsWidget";
import { JournalWidget } from './components/widgets/JournalWidget';
import { City } from './components/widgets/City';
import { Sight } from './components/widgets/Sight';
import { WeatherWidget } from './components/widgets/WeatherWidget';
import { Lodging } from "./components/static/Lodging";
import { Transit } from "./components/static/Transit";
import { Food } from "./components/static/Food";
import { NewReview } from "./components/pages/NewReview";

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="pages">
                    <Route path="Reviews" element={<Reviews />} />
                    <Route path="NewReview" element={<NewReview />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="searchresults" element={<SearchResults />} />
                </Route>
                <Route path="static">
                    <Route path="lodging" element={<Lodging />} />
                    <Route path="transit" element={<Transit />} />
                    <Route path="food" element={<Food />} />
                </Route>
                <Route path="widgets">
                    <Route path="ReviewsWidget" element={<ReviewsWidget />} />
                    <Route path="journal" element={<JournalWidget />} />
                    <Route path="city" element={<City />} />
                    <Route path="sight" element={<Sight />} />
                    <Route path="weather" element={<WeatherWidget />} />
                </Route>
            </Route>  
        </Routes>
    )
}