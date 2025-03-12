import React from 'react'
import SignIn from "./components/sign_in.jsx";
import Home from "./components/home.jsx";
import Profile from './components/profile.jsx';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Hero from './components/hero.jsx';
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Hero/>}/>
                <Route path="/aura/auth" element={<SignIn/>}/>
                <Route path="/aura/home/allproducts" element={<Home/>}/>
                <Route path="/aura/profile" element={<Profile/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App
