import React from "react";
import { Routes, Route } from "react-router";
import './App.css';

import Home from './components/Home';
import Layout from './components/Layout';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import SearchResults from './components/pages/SearchResults';
import Reviews from './components/pages/Reviews';
import ReviewsWidget from "./components/widgets/ReviewsWidget";
import Journal from './components/widgets/JournalWidget';
import City from './components/widgets/City';
import Sight from './components/widgets/Sight';
import Weather from './components/widgets/Weather';
import Text from "./components/pages/Text";
import NewReview from "./components/pages/NewReview";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="widgets">
                    <Route path="ReviewsWidget" element={<ReviewsWidget />} />
                    <Route path="journal" element={<Journal />} />
                    <Route path="city" element={<City />} />
                    <Route path="sight" element={<Sight />} />
                    <Route path="weather" element={<Weather />} />
                </Route>
                <Route path="pages">
                    <Route path="Reviews" element={<Reviews />} />
                    <Route path="NewReview" element={<NewReview />} />
                    <Route path="signin" element={<SignIn />} />
                    <Route path="signup" element={<SignUp />} />
                    <Route path="searchresults" element={<SearchResults />} />
                    <Route path="text" element={<Text />} />
                </Route>
            </Route>  
        </Routes>
    )
}

export default App;
