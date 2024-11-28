import React from "react";
import { Routes, Route } from "react-router";
import './App.css';

import Home from './components/Home';
import Layout from './components/Layout';
import LogIn from './components/LogIn';
import SearchResults from './components/SearchResults';
import SignUp from './components/SignUp';
import Visited from './components/widgets/Visited';
import Journal from './components/widgets/Journal';
import City from './components/widgets/City';
import Sight from './components/widgets/Sight';
import Weather from './components/widgets/Weather';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="login" element={< LogIn />} />
                <Route path="searchresults" element={< SearchResults />} />
                <Route path="signup" element={< SignUp />} />
                <Route path="widgets">
                    <Route path="visited" element={<Visited />} />
                    <Route path="journal" element={<Journal />} />
                    <Route path="city" element={<City />} />
                    <Route path="sight" element={<Sight />} />
                    <Route path="weather" element={<Weather />} />
                </Route>
            </Route>  
        </Routes>
    )
}

export default App;
