import React from 'react'
import SignIn from "./components/sign_in.jsx";
import Home from "./components/home.jsx";
import Profile from './components/profile.jsx';
import Product from './components/product.jsx';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Hero from './components/hero.jsx';
import Pagenotfound from './components/Pagenotfound.jsx';
import Update from './components/Update.jsx';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Hero/>}/>
                <Route path="/aura/auth" element={<SignIn/>}/>
                <Route path="/aura/home/allproducts" element={<Home/>}/>
                <Route path="/aura/profile" element={<Profile/>}/>
                <Route path='/aura/product/1' element={<Product/>}/>
                <Route path='*' element={<Pagenotfound/>}/>
                <Route path='/aura/product/1/update' element={<Update/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default App
